import { connection } from "next/server";

const GOOGLE_PLACE_DETAILS_URL = "https://places.googleapis.com/v1/places";
const DEFAULT_REVALIDATE_SECONDS = 60 * 60 * 6;

export const GOOGLE_REVIEW_WRITE_URL =
  "https://search.google.com/local/writereview?placeid=ChIJVZHKR3a7woARj_q4EjM_VY0";

type GoogleLocalizedText = {
  text?: string;
  languageCode?: string;
};

type GoogleAuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type GoogleReview = {
  name?: string;
  rating?: number;
  text?: GoogleLocalizedText;
  originalText?: GoogleLocalizedText;
  publishTime?: string;
  relativePublishTimeDescription?: string;
  authorAttribution?: GoogleAuthorAttribution;
  googleMapsUri?: string;
};

type GooglePlaceDetails = {
  id?: string;
  displayName?: GoogleLocalizedText;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GoogleReview[];
};

export type GoogleReviewCard = {
  id: string;
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  googleMapsUri?: string;
  rating: number;
  text: string;
  relativePublishTimeDescription?: string;
};

export type GoogleReviewsSummary = {
  placeName: string;
  rating: number;
  userRatingCount: number;
  googleMapsUri?: string;
  reviews: GoogleReviewCard[];
};

function getRefreshSeconds() {
  const configured = Number(process.env.GOOGLE_REVIEWS_REFRESH_SECONDS);

  return Number.isFinite(configured) && configured >= 300
    ? configured
    : DEFAULT_REVALIDATE_SECONDS;
}

function getReviewText(review: GoogleReview) {
  return review.text?.text || review.originalText?.text || "";
}

function getReviewId(review: GoogleReview, index: number) {
  return (
    review.name ||
    review.googleMapsUri ||
    `${review.authorAttribution?.displayName || "google-review"}-${index}`
  );
}

export async function getGoogleReviews(): Promise<GoogleReviewsSummary | null> {
  await connection();

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const response = await fetch(
      `${GOOGLE_PLACE_DETAILS_URL}/${encodeURIComponent(placeId)}?languageCode=en`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "id,displayName,rating,userRatingCount,googleMapsUri,reviews",
        },
        next: {
          revalidate: getRefreshSeconds(),
          tags: ["google-reviews"],
        },
      },
    );

    if (!response.ok) {
      console.error("Google Places reviews request failed", response.status);
      return null;
    }

    const place = (await response.json()) as GooglePlaceDetails;
    const rating = typeof place.rating === "number" ? place.rating : 0;
    const userRatingCount =
      typeof place.userRatingCount === "number" ? place.userRatingCount : 0;

    const reviews = (place.reviews || [])
      .map((review, index): GoogleReviewCard | null => {
        const text = getReviewText(review);
        const authorName = review.authorAttribution?.displayName;

        if (!text || !authorName || typeof review.rating !== "number") {
          return null;
        }

        return {
          id: getReviewId(review, index),
          authorName,
          authorUri: review.authorAttribution?.uri,
          authorPhotoUri: review.authorAttribution?.photoUri,
          googleMapsUri: review.googleMapsUri || place.googleMapsUri,
          rating: review.rating,
          text,
          relativePublishTimeDescription:
            review.relativePublishTimeDescription,
        };
      })
      .filter((review): review is GoogleReviewCard => review !== null);

    if (!rating && reviews.length === 0) {
      return null;
    }

    return {
      placeName: place.displayName?.text || "LA Sports World",
      rating,
      userRatingCount,
      googleMapsUri: place.googleMapsUri,
      reviews,
    };
  } catch (error) {
    console.error("Unable to load Google reviews", error);
    return null;
  }
}
