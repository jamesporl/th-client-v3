/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Account = Node & {
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type AccountConnection = NodeConnection & {
  nodes: Array<Account>;
  totalCount: Scalars['Int']['output'];
};

export type AddAppDraftBannerImgInput = {
  appId: Scalars['ID']['input'];
  file: Scalars['Upload']['input'];
};

export type AddAppInput = {
  name: Scalars['String']['input'];
  shortDesc: Scalars['String']['input'];
};

export type AddCommentInput = {
  jsonContent: Scalars['JSON']['input'];
  parentCommentId?: InputMaybe<Scalars['ID']['input']>;
  refId: Scalars['ID']['input'];
  type: CommentType;
};

export type AddJobInput = {
  jobType: Scalars['String']['input'];
  schedule?: InputMaybe<Scalars['String']['input']>;
};

export type App = Node & {
  _id: Scalars['ID']['output'];
  bannerImgs?: Maybe<Array<Maybe<BannerImg>>>;
  commentsCount: Scalars['Int']['output'];
  htmlDesc?: Maybe<Scalars['String']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isUpvoted: Scalars['Boolean']['output'];
  jsonDesc?: Maybe<Scalars['JSON']['output']>;
  logoImg?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownedBy: SimpleAccount;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  shortDesc: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  socialUrls?: Maybe<SocialUrls>;
  status: AppStatusObject;
  tags?: Maybe<Array<Maybe<AppTag>>>;
  textDesc?: Maybe<Scalars['String']['output']>;
  upvotesCount: Scalars['Int']['output'];
  videoUrl?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type AppConnection = NodeConnection & {
  nodes: Array<App>;
  totalCount: Scalars['Int']['output'];
};

export type AppDraft = Node & {
  _id: Scalars['ID']['output'];
  appId: Scalars['String']['output'];
  bannerImgs?: Maybe<Array<Maybe<BannerImg>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  htmlDesc?: Maybe<Scalars['String']['output']>;
  jsonDesc?: Maybe<Scalars['JSON']['output']>;
  logoImg?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownedBy?: Maybe<SimpleAccount>;
  shortDesc: Scalars['String']['output'];
  socialUrls?: Maybe<SocialUrls>;
  status: AppDraftStatusObject;
  tags?: Maybe<Array<Maybe<AppTag>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type AppDraftConnection = NodeConnection & {
  nodes: Array<AppDraft>;
  totalCount: Scalars['Int']['output'];
};

export enum AppDraftStatus {
  Deleted = 'deleted',
  InProgress = 'inProgress',
  Published = 'published',
  Submitted = 'submitted'
}

export type AppDraftStatusObject = {
  key: AppDraftStatus;
  label: Scalars['String']['output'];
};

export enum AppStatus {
  Deleted = 'deleted',
  New = 'new',
  Published = 'published',
  Unpublished = 'unpublished',
  Waiting = 'waiting'
}

export type AppStatusObject = {
  key: AppStatus;
  label: Scalars['String']['output'];
};

export type AppTag = Node & {
  _id: Scalars['ID']['output'];
  appsCount: Scalars['Int']['output'];
  imgUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type AppTagConnection = NodeConnection & {
  nodes: Array<AppTag>;
  totalCount: Scalars['Int']['output'];
};

export enum AppsOtherFilter {
  ExcludeFeatured = 'excludeFeatured',
  IsFeatured = 'isFeatured'
}

export enum AppsSortBy {
  Name = 'name',
  PublishedDate = 'publishedDate',
  Random = 'random'
}

export type BannerImageUrls = {
  large: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
};

export type BannerImg = Node & {
  _id: Scalars['ID']['output'];
  image: BannerImageUrls;
  order: Scalars['Int']['output'];
};

export type Comment = Node & {
  _id: Scalars['ID']['output'];
  comments?: Maybe<Comments>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: SimpleAccount;
  htmlContent: Scalars['String']['output'];
  isParent?: Maybe<Scalars['Boolean']['output']>;
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  isUpvoted: Scalars['Boolean']['output'];
  parentCommentId?: Maybe<Scalars['String']['output']>;
  refId: Scalars['String']['output'];
  status: CommentStatusObject;
  textContent?: Maybe<Scalars['String']['output']>;
  upvotesCount: Scalars['Int']['output'];
};

export enum CommentStatus {
  Deleted = 'deleted',
  Published = 'published'
}

export type CommentStatusObject = {
  key: CommentStatus;
  label: Scalars['String']['output'];
};

export enum CommentType {
  App = 'app',
  Post = 'post'
}

export type Comments = {
  hasMore: Scalars['Boolean']['output'];
  nodes: Array<Comment>;
};

export type CreateAppDraftFromPublishedAppInput = {
  appId: Scalars['ID']['input'];
};

export type DefaultMutationPayload = {
  isCompleted: Scalars['Boolean']['output'];
};

export type DeleteAppDraftBannerImgInput = {
  appId: Scalars['ID']['input'];
  bannerImgId: Scalars['ID']['input'];
};

export type DeleteAppDraftInput = {
  appId: Scalars['ID']['input'];
};

export type DeleteAppDraftLogoImgInput = {
  appId: Scalars['ID']['input'];
};

export type DeleteAppInput = {
  appId: Scalars['ID']['input'];
};

export type DeleteCommentInput = {
  commentId: Scalars['ID']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginWithGoogleInput = {
  credential: Scalars['String']['input'];
};

export type Mutation = {
  addApp: App;
  addAppDraftBannerImg: BannerImg;
  addComment: Comment;
  addJob: DefaultMutationPayload;
  createAppDraftFromPublishedApp: AppDraft;
  deleteApp: DefaultMutationPayload;
  deleteAppDraft: DefaultMutationPayload;
  deleteAppDraftBannerImg: DefaultMutationPayload;
  deleteAppDraftLogoImg: DefaultMutationPayload;
  deleteComment: DefaultMutationPayload;
  echo: Scalars['String']['output'];
  /** Authenticates a user with email and password */
  login: Scalars['String']['output'];
  loginWithGoogle: Scalars['String']['output'];
  publishAppDraft: AppDraft;
  republishApp: DefaultMutationPayload;
  /** Reset password as an authenticated user */
  resetPasswordByToken: DefaultMutationPayload;
  /** Reset password as an authenticated user */
  resetPasswordWithAuth: DefaultMutationPayload;
  sendPasswordResetLink: DefaultMutationPayload;
  sendVerificationCode: DefaultMutationPayload;
  signup: DefaultMutationPayload;
  submitAppDraft: SubmitAppDraftPayload;
  togglePinComment: DefaultMutationPayload;
  toggleUpvote: DefaultMutationPayload;
  undoSubmitAppDraft: AppDraft;
  unpublishApp: DefaultMutationPayload;
  updateAccountLastSeenAt: DefaultMutationPayload;
  updateAppDraft: AppDraft;
  updateAppDraftBannerImgsOrder: DefaultMutationPayload;
  updateAppDraftLogoImg: Scalars['String']['output'];
  updateEmail: DefaultMutationPayload;
  updatePersonalInfo: Profile;
  updateProfilePhoto: DefaultMutationPayload;
  verifyAccountByCode: Scalars['String']['output'];
};


export type MutationAddAppArgs = {
  input: AddAppInput;
};


export type MutationAddAppDraftBannerImgArgs = {
  input: AddAppDraftBannerImgInput;
};


export type MutationAddCommentArgs = {
  input: AddCommentInput;
};


export type MutationAddJobArgs = {
  input: AddJobInput;
};


export type MutationCreateAppDraftFromPublishedAppArgs = {
  input: CreateAppDraftFromPublishedAppInput;
};


export type MutationDeleteAppArgs = {
  input: DeleteAppInput;
};


export type MutationDeleteAppDraftArgs = {
  input: DeleteAppDraftInput;
};


export type MutationDeleteAppDraftBannerImgArgs = {
  input: DeleteAppDraftBannerImgInput;
};


export type MutationDeleteAppDraftLogoImgArgs = {
  input: DeleteAppDraftLogoImgInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationEchoArgs = {
  str: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLoginWithGoogleArgs = {
  input: LoginWithGoogleInput;
};


export type MutationPublishAppDraftArgs = {
  input: PublishAppDraftInput;
};


export type MutationRepublishAppArgs = {
  input: RepublishAppInput;
};


export type MutationResetPasswordByTokenArgs = {
  input: ResetPasswordByTokenInput;
};


export type MutationResetPasswordWithAuthArgs = {
  input: ResetPasswordWithAuthInput;
};


export type MutationSendPasswordResetLinkArgs = {
  input: SendPasswordResetLinkInput;
};


export type MutationSendVerificationCodeArgs = {
  input: SendVerificationCodeInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationSubmitAppDraftArgs = {
  input: SubmitAppDraftInput;
};


export type MutationTogglePinCommentArgs = {
  input: TogglePinCommentInput;
};


export type MutationToggleUpvoteArgs = {
  input: ToggleUpvoteInput;
};


export type MutationUndoSubmitAppDraftArgs = {
  input: UndoSubmitAppDraftInput;
};


export type MutationUnpublishAppArgs = {
  input: UnpublishAppInput;
};


export type MutationUpdateAppDraftArgs = {
  input: UpdateAppDraftInput;
};


export type MutationUpdateAppDraftBannerImgsOrderArgs = {
  input: UpdateAppDraftBannerImgsOrderInput;
};


export type MutationUpdateAppDraftLogoImgArgs = {
  input: UpdateAppDraftLogoImgInput;
};


export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};


export type MutationUpdatePersonalInfoArgs = {
  input: UpdatePersonalInfoInput;
};


export type MutationUpdateProfilePhotoArgs = {
  input: UpdateProfilePhotoInput;
};


export type MutationVerifyAccountByCodeArgs = {
  input: VerifyAccountByCodeInput;
};

export type Node = {
  _id: Scalars['ID']['output'];
};

export type NodeConnection = {
  totalCount: Scalars['Int']['output'];
};

export type Profile = Node & {
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  isAdmin: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastSeenAt: Scalars['DateTime']['output'];
  location?: Maybe<Scalars['String']['output']>;
  shortDesc?: Maybe<Scalars['String']['output']>;
  socialUrls?: Maybe<SocialUrls>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type PublishAppDraftInput = {
  appId: Scalars['ID']['input'];
};

export type Query = {
  aAppDrafts?: Maybe<AppDraftConnection>;
  accounts?: Maybe<AccountConnection>;
  app: App;
  appDraft?: Maybe<AppDraft>;
  appTag?: Maybe<AppTag>;
  appTags?: Maybe<AppTagConnection>;
  apps?: Maybe<AppConnection>;
  comments?: Maybe<Comments>;
  myAppDrafts?: Maybe<AppDraftConnection>;
  myApps?: Maybe<AppConnection>;
  myProfile?: Maybe<Profile>;
  ping: Scalars['String']['output'];
};


export type QueryAAppDraftsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  searchString?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccountsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  searchString?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAppArgs = {
  slug: Scalars['String']['input'];
};


export type QueryAppDraftArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAppTagArgs = {
  slug: Scalars['String']['input'];
};


export type QueryAppTagsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  searchString?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAppsArgs = {
  otherFilters?: InputMaybe<Array<AppsOtherFilter>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  publishedFromDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedToDate?: InputMaybe<Scalars['DateTime']['input']>;
  searchString?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<AppsSortBy>;
  tagSlug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCommentsArgs = {
  childCommentsPageSize?: InputMaybe<Scalars['Int']['input']>;
  isPinned: Scalars['Boolean']['input'];
  lastId?: InputMaybe<Scalars['ID']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  parentCommentId?: InputMaybe<Scalars['ID']['input']>;
  refId: Scalars['ID']['input'];
  type: CommentType;
};


export type QueryMyAppDraftsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyAppsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type RepublishAppInput = {
  appId: Scalars['ID']['input'];
};

export type ResetPasswordByTokenInput = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ResetPasswordWithAuthInput = {
  newPassword: Scalars['String']['input'];
};

export type SendPasswordResetLinkInput = {
  email: Scalars['String']['input'];
};

export type SendVerificationCodeInput = {
  email: Scalars['String']['input'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SimpleAccount = Node & {
  _id: Scalars['ID']['output'];
  firstName: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
};

export type SocialUrls = {
  facebook?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedIn?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

export type SocialUrlsInput = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
};

export type SubmitAppDraftInput = {
  appId: Scalars['ID']['input'];
};

export type SubmitAppDraftPayload = {
  errors: Array<Scalars['String']['output']>;
  isSubmitted: Scalars['Boolean']['output'];
};

export type TogglePinCommentInput = {
  commentId: Scalars['ID']['input'];
};

export type ToggleUpvoteInput = {
  refId: Scalars['ID']['input'];
  type: UpvoteType;
};

export type UndoSubmitAppDraftInput = {
  appId: Scalars['ID']['input'];
};

export type UnpublishAppInput = {
  appId: Scalars['ID']['input'];
};

export type UpdateAppDraftBannerImgsOrderInput = {
  appId: Scalars['ID']['input'];
  bannerImgIds: Array<Scalars['ID']['input']>;
};

export type UpdateAppDraftInput = {
  appId: Scalars['ID']['input'];
  jsonDesc?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  shortDesc: Scalars['String']['input'];
  socialUrls?: InputMaybe<SocialUrlsInput>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAppDraftLogoImgInput = {
  appId: Scalars['ID']['input'];
  file: Scalars['Upload']['input'];
};

export type UpdateEmailInput = {
  newEmail: Scalars['String']['input'];
};

export type UpdatePersonalInfoInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  shortDesc?: InputMaybe<Scalars['String']['input']>;
  socialUrls?: InputMaybe<SocialUrlsInput>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfilePhotoInput = {
  file: Scalars['Upload']['input'];
};

export enum UpvoteType {
  App = 'app',
  Comment = 'comment'
}

export type VerifyAccountByCodeInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { login: string };

export type LoginWithGoogleMutationVariables = Exact<{
  input: LoginWithGoogleInput;
}>;


export type LoginWithGoogleMutation = { loginWithGoogle: string };

export type MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQuery = { myProfile?: { _id: string, firstName?: string | null, lastName?: string | null, email: string, shortDesc?: string | null, image?: string | null, isAdmin: boolean, bio?: string | null, websiteUrl?: string | null, location?: string | null, lastSeenAt: any, socialUrls?: { facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null } | null };

export type ResetPasswordByTokenMutationVariables = Exact<{
  input: ResetPasswordByTokenInput;
}>;


export type ResetPasswordByTokenMutation = { resetPasswordByToken: { isCompleted: boolean } };

export type SendPasswordResetLinkMutationVariables = Exact<{
  input: SendPasswordResetLinkInput;
}>;


export type SendPasswordResetLinkMutation = { sendPasswordResetLink: { isCompleted: boolean } };

export type SendVerificationCodeMutationVariables = Exact<{
  input: SendVerificationCodeInput;
}>;


export type SendVerificationCodeMutation = { sendVerificationCode: { isCompleted: boolean } };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { signup: { isCompleted: boolean } };

export type VerifyAccountByCodeMutationVariables = Exact<{
  input: VerifyAccountByCodeInput;
}>;


export type VerifyAccountByCodeMutation = { verifyAccountByCode: string };

export type AddAppDraftBannerImgMutationVariables = Exact<{
  input: AddAppDraftBannerImgInput;
}>;


export type AddAppDraftBannerImgMutation = { addAppDraftBannerImg: { _id: string, order: number, image: { large: string, thumbnail: string } } };

export type AddAppMutationVariables = Exact<{
  input: AddAppInput;
}>;


export type AddAppMutation = { addApp: { _id: string, name: string, shortDesc: string, htmlDesc?: string | null, textDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, slug?: string | null, publishedAt?: any | null, upvotesCount: number, commentsCount: number, isUpvoted: boolean, isFeatured?: boolean | null, bannerImgs?: Array<{ _id: string, order: number, image: { large: string, thumbnail: string } } | null> | null, socialUrls?: { facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null, status: { key: AppStatus, label: string }, tags?: Array<{ _id: string, name: string, slug: string } | null> | null, ownedBy: { _id: string, firstName: string, lastName: string, image?: string | null } } };

export type AddCommentMutationVariables = Exact<{
  input: AddCommentInput;
}>;


export type AddCommentMutation = { addComment: { _id: string, refId: string, isParent?: boolean | null, htmlContent: string, createdAt: any, isPinned?: boolean | null, upvotesCount: number, isUpvoted: boolean, parentCommentId?: string | null, createdBy: { _id: string, firstName: string, lastName: string, image?: string | null } } };

export type AppDraftQueryVariables = Exact<{
  _id: Scalars['ID']['input'];
}>;


export type AppDraftQuery = { appDraft?: { _id: string, appId: string, name: string, shortDesc: string, jsonDesc?: any | null, htmlDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, createdAt?: any | null, tags?: Array<{ _id: string, name: string, slug: string } | null> | null, bannerImgs?: Array<{ _id: string, order: number, image: { large: string, thumbnail: string } } | null> | null, ownedBy?: { _id: string, firstName: string, lastName: string, image?: string | null } | null, status: { key: AppDraftStatus, label: string }, socialUrls?: { facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null } | null };

export type AppQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type AppQuery = { app: { _id: string, name: string, shortDesc: string, htmlDesc?: string | null, textDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, slug?: string | null, publishedAt?: any | null, upvotesCount: number, commentsCount: number, isUpvoted: boolean, isFeatured?: boolean | null, bannerImgs?: Array<{ _id: string, order: number, image: { large: string, thumbnail: string } } | null> | null, socialUrls?: { facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null, status: { key: AppStatus, label: string }, tags?: Array<{ _id: string, name: string, slug: string } | null> | null, ownedBy: { _id: string, firstName: string, lastName: string, image?: string | null } } };

export type AppTagQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type AppTagQuery = { appTag?: { _id: string, name: string, slug: string, appsCount: number, imgUrl: string } | null };

export type AppTagsQueryVariables = Exact<{
  searchString?: InputMaybe<Scalars['String']['input']>;
}>;


export type AppTagsQuery = { appTags?: { totalCount: number, nodes: Array<{ _id: string, name: string, slug: string, appsCount: number, imgUrl: string }> } | null };

export type AppsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  tagSlug?: InputMaybe<Scalars['String']['input']>;
  searchString?: InputMaybe<Scalars['String']['input']>;
  publishedFromDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedToDate?: InputMaybe<Scalars['DateTime']['input']>;
  otherFilters?: InputMaybe<Array<AppsOtherFilter> | AppsOtherFilter>;
  sortBy?: InputMaybe<AppsSortBy>;
}>;


export type AppsQuery = { apps?: { totalCount: number, nodes: Array<{ _id: string, name: string, shortDesc: string, logoImg?: string | null, websiteUrl?: string | null, slug?: string | null, upvotesCount: number, commentsCount: number, isUpvoted: boolean, isFeatured?: boolean | null, tags?: Array<{ _id: string, name: string, slug: string } | null> | null }> } | null };

export type CommentsQueryVariables = Exact<{
  refId: Scalars['ID']['input'];
  type: CommentType;
  lastId?: InputMaybe<Scalars['ID']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  childCommentsPageSize?: InputMaybe<Scalars['Int']['input']>;
  isPinned: Scalars['Boolean']['input'];
  parentCommentId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CommentsQuery = { comments?: { hasMore: boolean, nodes: Array<{ _id: string, refId: string, isParent?: boolean | null, parentCommentId?: string | null, htmlContent: string, createdAt: any, isPinned?: boolean | null, upvotesCount: number, isUpvoted: boolean, createdBy: { _id: string, firstName: string, lastName: string, image?: string | null }, comments?: { hasMore: boolean, nodes: Array<{ _id: string, refId: string, isParent?: boolean | null, htmlContent: string, createdAt: any, isPinned?: boolean | null, parentCommentId?: string | null, upvotesCount: number, isUpvoted: boolean, createdBy: { _id: string, firstName: string, lastName: string, image?: string | null } }> } | null }> } | null };

export type CreateAppDraftFromPublishedAppMutationVariables = Exact<{
  input: CreateAppDraftFromPublishedAppInput;
}>;


export type CreateAppDraftFromPublishedAppMutation = { createAppDraftFromPublishedApp: { _id: string } };

export type DeleteAppDraftBannerImgMutationVariables = Exact<{
  input: DeleteAppDraftBannerImgInput;
}>;


export type DeleteAppDraftBannerImgMutation = { deleteAppDraftBannerImg: { isCompleted: boolean } };

export type DeleteAppDraftMutationVariables = Exact<{
  input: DeleteAppDraftInput;
}>;


export type DeleteAppDraftMutation = { deleteAppDraft: { isCompleted: boolean } };

export type DeleteAppMutationVariables = Exact<{
  input: DeleteAppInput;
}>;


export type DeleteAppMutation = { deleteApp: { isCompleted: boolean } };

export type DeleteCommentMutationVariables = Exact<{
  input: DeleteCommentInput;
}>;


export type DeleteCommentMutation = { deleteComment: { isCompleted: boolean } };

export type MyAppDraftsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyAppDraftsQuery = { myAppDrafts?: { totalCount: number, nodes: Array<{ _id: string, appId: string, name: string, shortDesc: string, jsonDesc?: any | null, htmlDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, createdAt?: any | null, tags?: Array<{ _id: string, name: string } | null> | null, bannerImgs?: Array<{ _id: string, order: number, image: { large: string, thumbnail: string } } | null> | null, ownedBy?: { _id: string, firstName: string, lastName: string, image?: string | null } | null, status: { key: AppDraftStatus, label: string }, socialUrls?: { facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null }> } | null };

export type MyAppsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyAppsQuery = { myApps?: { totalCount: number, nodes: Array<{ _id: string, name: string, shortDesc: string, htmlDesc?: string | null, textDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, slug?: string | null, publishedAt?: any | null, upvotesCount: number, commentsCount: number, isUpvoted: boolean, isFeatured?: boolean | null, bannerImgs?: Array<{ _id: string, order: number, image: { large: string, thumbnail: string } } | null> | null, socialUrls?: { facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null, status: { key: AppStatus, label: string }, tags?: Array<{ _id: string, name: string, slug: string } | null> | null, ownedBy: { _id: string, firstName: string, lastName: string, image?: string | null } }> } | null };

export type RepublishAppMutationVariables = Exact<{
  input: RepublishAppInput;
}>;


export type RepublishAppMutation = { republishApp: { isCompleted: boolean } };

export type SubmitAppDraftMutationVariables = Exact<{
  input: SubmitAppDraftInput;
}>;


export type SubmitAppDraftMutation = { submitAppDraft: { errors: Array<string>, isSubmitted: boolean } };

export type TogglePinCommentMutationVariables = Exact<{
  input: TogglePinCommentInput;
}>;


export type TogglePinCommentMutation = { togglePinComment: { isCompleted: boolean } };

export type ToggleUpvoteMutationVariables = Exact<{
  input: ToggleUpvoteInput;
}>;


export type ToggleUpvoteMutation = { toggleUpvote: { isCompleted: boolean } };

export type UndoSubmitAppDraftMutationVariables = Exact<{
  input: UndoSubmitAppDraftInput;
}>;


export type UndoSubmitAppDraftMutation = { undoSubmitAppDraft: { _id: string } };

export type UnpublishAppMutationVariables = Exact<{
  input: UnpublishAppInput;
}>;


export type UnpublishAppMutation = { unpublishApp: { isCompleted: boolean } };

export type UpdateAccountLastSeenAtMutationVariables = Exact<{ [key: string]: never; }>;


export type UpdateAccountLastSeenAtMutation = { updateAccountLastSeenAt: { isCompleted: boolean } };

export type UpdateAppDraftBannerImgsOrderMutationVariables = Exact<{
  input: UpdateAppDraftBannerImgsOrderInput;
}>;


export type UpdateAppDraftBannerImgsOrderMutation = { updateAppDraftBannerImgsOrder: { isCompleted: boolean } };

export type UpdateAppDraftLogoImgMutationVariables = Exact<{
  input: UpdateAppDraftLogoImgInput;
}>;


export type UpdateAppDraftLogoImgMutation = { updateAppDraftLogoImg: string };

export type UpdateAppDraftMutationVariables = Exact<{
  input: UpdateAppDraftInput;
}>;


export type UpdateAppDraftMutation = { updateAppDraft: { _id: string, appId: string, name: string, shortDesc: string, jsonDesc?: any | null, htmlDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, createdAt?: any | null, tags?: Array<{ _id: string, name: string } | null> | null, bannerImgs?: Array<{ _id: string, order: number, image: { large: string, thumbnail: string } } | null> | null, ownedBy?: { _id: string, firstName: string, lastName: string, image?: string | null } | null, status: { key: AppDraftStatus, label: string }, socialUrls?: { facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null } };

export type UpdatePersonalInfoMutationVariables = Exact<{
  input: UpdatePersonalInfoInput;
}>;


export type UpdatePersonalInfoMutation = { updatePersonalInfo: { _id: string, firstName?: string | null, lastName?: string | null, email: string, shortDesc?: string | null, image?: string | null, isAdmin: boolean, bio?: string | null, websiteUrl?: string | null, location?: string | null, lastSeenAt: any, socialUrls?: { facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null } };

export type UpdateProfilePhotoMutationVariables = Exact<{
  input: UpdateProfilePhotoInput;
}>;


export type UpdateProfilePhotoMutation = { updateProfilePhoto: { isCompleted: boolean } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LoginWithGoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginWithGoogle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginWithGoogleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginWithGoogle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoginWithGoogleMutation, LoginWithGoogleMutationVariables>;
export const MyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSeenAt"}}]}}]}}]} as unknown as DocumentNode<MyProfileQuery, MyProfileQueryVariables>;
export const ResetPasswordByTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPasswordByToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordByTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordByToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordByTokenMutation, ResetPasswordByTokenMutationVariables>;
export const SendPasswordResetLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendPasswordResetLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendPasswordResetLinkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendPasswordResetLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<SendPasswordResetLinkMutation, SendPasswordResetLinkMutationVariables>;
export const SendVerificationCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendVerificationCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendVerificationCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendVerificationCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<SendVerificationCodeMutation, SendVerificationCodeMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const VerifyAccountByCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyAccountByCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyAccountByCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAccountByCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<VerifyAccountByCodeMutation, VerifyAccountByCodeMutationVariables>;
export const AddAppDraftBannerImgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAppDraftBannerImg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddAppDraftBannerImgInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAppDraftBannerImg"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}}]}}]}}]} as unknown as DocumentNode<AddAppDraftBannerImgMutation, AddAppDraftBannerImgMutationVariables>;
export const AddAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"textDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"upvotesCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isUpvoted"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}}]}}]} as unknown as DocumentNode<AddAppMutation, AddAppMutationVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"refId"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isParent"}},{"kind":"Field","name":{"kind":"Name","value":"htmlContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"upvotesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isUpvoted"}},{"kind":"Field","name":{"kind":"Name","value":"parentCommentId"}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const AppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"jsonDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<AppDraftQuery, AppDraftQueryVariables>;
export const AppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"App"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"textDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"upvotesCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isUpvoted"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}}]}}]} as unknown as DocumentNode<AppQuery, AppQueryVariables>;
export const AppTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"appsCount"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]}}]} as unknown as DocumentNode<AppTagQuery, AppTagQueryVariables>;
export const AppTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"appsCount"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<AppTagsQuery, AppTagsQueryVariables>;
export const AppsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Apps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publishedFromDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publishedToDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otherFilters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppsOtherFilter"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AppsSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}},{"kind":"Argument","name":{"kind":"Name","value":"tagSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}}},{"kind":"Argument","name":{"kind":"Name","value":"publishedFromDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publishedFromDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"publishedToDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publishedToDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"otherFilters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherFilters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"upvotesCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isUpvoted"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<AppsQuery, AppsQueryVariables>;
export const CommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"comments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"childCommentsPageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPinned"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentCommentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"childCommentsPageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"childCommentsPageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"isPinned"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPinned"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentCommentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentCommentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"refId"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isParent"}},{"kind":"Field","name":{"kind":"Name","value":"parentCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"htmlContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"upvotesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isUpvoted"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"refId"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isParent"}},{"kind":"Field","name":{"kind":"Name","value":"htmlContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"parentCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"upvotesCount"}},{"kind":"Field","name":{"kind":"Name","value":"isUpvoted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}}]}}]}}]} as unknown as DocumentNode<CommentsQuery, CommentsQueryVariables>;
export const CreateAppDraftFromPublishedAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAppDraftFromPublishedApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAppDraftFromPublishedAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAppDraftFromPublishedApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateAppDraftFromPublishedAppMutation, CreateAppDraftFromPublishedAppMutationVariables>;
export const DeleteAppDraftBannerImgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAppDraftBannerImg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAppDraftBannerImgInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAppDraftBannerImg"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<DeleteAppDraftBannerImgMutation, DeleteAppDraftBannerImgMutationVariables>;
export const DeleteAppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAppDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAppDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<DeleteAppDraftMutation, DeleteAppDraftMutationVariables>;
export const DeleteAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<DeleteAppMutation, DeleteAppMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const MyAppDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyAppDrafts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myAppDrafts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"jsonDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<MyAppDraftsQuery, MyAppDraftsQueryVariables>;
export const MyAppsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyApps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myApps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"textDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"upvotesCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isUpvoted"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<MyAppsQuery, MyAppsQueryVariables>;
export const RepublishAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RepublishApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RepublishAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"republishApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<RepublishAppMutation, RepublishAppMutationVariables>;
export const SubmitAppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitAppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubmitAppDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitAppDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"isSubmitted"}}]}}]}}]} as unknown as DocumentNode<SubmitAppDraftMutation, SubmitAppDraftMutationVariables>;
export const TogglePinCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TogglePinComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TogglePinCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"togglePinComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<TogglePinCommentMutation, TogglePinCommentMutationVariables>;
export const ToggleUpvoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleUpvote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToggleUpvoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleUpvote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<ToggleUpvoteMutation, ToggleUpvoteMutationVariables>;
export const UndoSubmitAppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UndoSubmitAppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UndoSubmitAppDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"undoSubmitAppDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UndoSubmitAppDraftMutation, UndoSubmitAppDraftMutationVariables>;
export const UnpublishAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnpublishApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnpublishAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unpublishApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<UnpublishAppMutation, UnpublishAppMutationVariables>;
export const UpdateAccountLastSeenAtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAccountLastSeenAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAccountLastSeenAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<UpdateAccountLastSeenAtMutation, UpdateAccountLastSeenAtMutationVariables>;
export const UpdateAppDraftBannerImgsOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppDraftBannerImgsOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAppDraftBannerImgsOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAppDraftBannerImgsOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<UpdateAppDraftBannerImgsOrderMutation, UpdateAppDraftBannerImgsOrderMutationVariables>;
export const UpdateAppDraftLogoImgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppDraftLogoImg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAppDraftLogoImgInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAppDraftLogoImg"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateAppDraftLogoImgMutation, UpdateAppDraftLogoImgMutationVariables>;
export const UpdateAppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAppDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAppDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"jsonDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<UpdateAppDraftMutation, UpdateAppDraftMutationVariables>;
export const UpdatePersonalInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePersonalInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePersonalInfoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonalInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSeenAt"}}]}}]}}]} as unknown as DocumentNode<UpdatePersonalInfoMutation, UpdatePersonalInfoMutationVariables>;
export const UpdateProfilePhotoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfilePhoto"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProfilePhotoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfilePhoto"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<UpdateProfilePhotoMutation, UpdateProfilePhotoMutationVariables>;