
interface BannerHeader {
    h1: string
    h2: string
    h3: string
}

interface Banner {
    backgroundImageURL: string
    header: BannerHeader
}

type VideoType = "show" | "movie"

interface BoxArt {
    videoId: number;
    url: string;
    width: number;
    height: number;
    isSmoky: boolean;
    extension: string;
    size: string;
    imageKey: string;
}

interface Delivery {
    has3D: boolean;
    hasHD: boolean;
    hasUltraHD: boolean;
    hasHDR: boolean;
    hasDolbyVision: boolean;
    hasDolbyAtmos: boolean;
    has51Audio: boolean;
    quality: string;
}

interface UserRating {
    type: string;
    userRating: number;
    tooNewForMatchScore: boolean;
}


interface Availability {
    isPlayable: boolean;
    availabilityDate: string;
    availabilityStartTime: number;
}


interface Video {
    videoId: number;
    title: string
    releaseYear: number
    watchURL: string
    maturity: Maturity
    type: VideoType
    runtime: number
    delivery: Delivery
    synopsis: string
    userRating: UserRating
    availability: Availability
    inRemindMeList: boolean
}

interface Maturity {
    rating: Rating;
}
interface Rating {
    value: string;
    maturityDescription: string;
    specificRatingReason: string;
    maturityLevel: number;
    ratingId: number;
}


export interface TvAppLandingPage {
    banner: Banner
    userWatchlist: Video[]
    userRecommendation: Video[]
    popular: Video[]
}


interface Notification {
    id: number
    text: string
    url: string
}

interface InteractiveVideo extends Video {}


export interface MobileAppLandingPage {
    banner: Banner
    userWatchlist: Video[]
    interactiveVideos: InteractiveVideo[]
    popular: Video[]
    notifications: Notification[]
}
