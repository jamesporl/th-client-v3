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
  __typename?: 'Account';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type AccountConnection = NodeConnection & {
  __typename?: 'AccountConnection';
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
  __typename?: 'App';
  _id: Scalars['ID']['output'];
  bannerImgs?: Maybe<Array<Maybe<BannerImg>>>;
  commentsCount: Scalars['Int']['output'];
  htmlDesc?: Maybe<Scalars['String']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isSupported: Scalars['Boolean']['output'];
  jsonDesc?: Maybe<Scalars['JSON']['output']>;
  logoImg?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownedBy?: Maybe<SimpleAccount>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  shortDesc: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  socialUrls?: Maybe<SocialUrls>;
  status: AppStatusObject;
  supportsCount: Scalars['Int']['output'];
  tags?: Maybe<Array<Maybe<AppTag>>>;
  textDesc?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type AppConnection = NodeConnection & {
  __typename?: 'AppConnection';
  nodes: Array<App>;
  totalCount: Scalars['Int']['output'];
};

export type AppDraft = Node & {
  __typename?: 'AppDraft';
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
  __typename?: 'AppDraftConnection';
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
  __typename?: 'AppDraftStatusObject';
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
  __typename?: 'AppStatusObject';
  key: AppStatus;
  label: Scalars['String']['output'];
};

export type AppTag = Node & {
  __typename?: 'AppTag';
  _id: Scalars['ID']['output'];
  appsCount: Scalars['Int']['output'];
  imgUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type AppTagConnection = NodeConnection & {
  __typename?: 'AppTagConnection';
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
  __typename?: 'BannerImageUrls';
  large: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
};

export type BannerImg = Node & {
  __typename?: 'BannerImg';
  _id: Scalars['ID']['output'];
  image: BannerImageUrls;
  order: Scalars['Int']['output'];
};

export type Comment = Node & {
  __typename?: 'Comment';
  _id: Scalars['ID']['output'];
  comments?: Maybe<CommentConnection>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: SimpleAccount;
  htmlContent?: Maybe<Scalars['String']['output']>;
  isParent?: Maybe<Scalars['Boolean']['output']>;
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  isSupported: Scalars['Boolean']['output'];
  status: CommentStatusObject;
  supportsCount: Scalars['Int']['output'];
  textContent?: Maybe<Scalars['String']['output']>;
};

export type CommentConnection = NodeConnection & {
  __typename?: 'CommentConnection';
  nodes: Array<Comment>;
  totalCount: Scalars['Int']['output'];
};

export enum CommentStatus {
  Deleted = 'deleted',
  Published = 'published'
}

export type CommentStatusObject = {
  __typename?: 'CommentStatusObject';
  key: CommentStatus;
  label: Scalars['String']['output'];
};

export enum CommentType {
  App = 'app',
  Post = 'post'
}

export type CreateAppDraftFromPublishedAppInput = {
  appId: Scalars['ID']['input'];
};

export type DefaultMutationPayload = {
  __typename?: 'DefaultMutationPayload';
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
  code: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addApp: App;
  addAppDraftBannerImg: BannerImg;
  addComment: Comment;
  addJob: DefaultMutationPayload;
  createAppDraftFromPublishedApp: AppDraft;
  createGoogleOAuthUrl: Scalars['String']['output'];
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
  toggleAppSupport: DefaultMutationPayload;
  toggleCommentSupport: DefaultMutationPayload;
  togglePinComment: DefaultMutationPayload;
  undoSubmitAppDraft: AppDraft;
  unpublishApp: DefaultMutationPayload;
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


export type MutationToggleAppSupportArgs = {
  input: ToggleAppSupportInput;
};


export type MutationToggleCommentSupportArgs = {
  input: ToggleCommentSupportInput;
};


export type MutationTogglePinCommentArgs = {
  input: TogglePinCommentInput;
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
  __typename?: 'Profile';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  isAdmin: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  shortDesc?: Maybe<Scalars['String']['output']>;
};

export type PublishAppDraftInput = {
  appId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  aAppDrafts?: Maybe<AppDraftConnection>;
  accounts?: Maybe<AccountConnection>;
  app: App;
  appDraft?: Maybe<AppDraft>;
  appTag?: Maybe<AppTag>;
  appTags?: Maybe<AppTagConnection>;
  apps?: Maybe<AppConnection>;
  comments?: Maybe<CommentConnection>;
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
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
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
  __typename?: 'SimpleAccount';
  _id: Scalars['ID']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type SocialUrls = {
  __typename?: 'SocialUrls';
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
  __typename?: 'SubmitAppDraftPayload';
  errors: Array<Scalars['String']['output']>;
  isSubmitted: Scalars['Boolean']['output'];
};

export type ToggleAppSupportInput = {
  appId: Scalars['ID']['input'];
};

export type ToggleCommentSupportInput = {
  commentId: Scalars['ID']['input'];
};

export type TogglePinCommentInput = {
  commentId: Scalars['ID']['input'];
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
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  shortDesc?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfilePhotoInput = {
  file: Scalars['Upload']['input'];
};

export type VerifyAccountByCodeInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQuery = { __typename?: 'Query', myProfile?: { __typename?: 'Profile', _id: string, firstName?: string | null, lastName?: string | null, email: string, shortDesc?: string | null, image?: string | null, isAdmin: boolean } | null };

export type ResetPasswordByTokenMutationVariables = Exact<{
  input: ResetPasswordByTokenInput;
}>;


export type ResetPasswordByTokenMutation = { __typename?: 'Mutation', resetPasswordByToken: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type SendPasswordResetLinkMutationVariables = Exact<{
  input: SendPasswordResetLinkInput;
}>;


export type SendPasswordResetLinkMutation = { __typename?: 'Mutation', sendPasswordResetLink: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type SendVerificationCodeMutationVariables = Exact<{
  input: SendVerificationCodeInput;
}>;


export type SendVerificationCodeMutation = { __typename?: 'Mutation', sendVerificationCode: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type VerifyAccountByCodeMutationVariables = Exact<{
  input: VerifyAccountByCodeInput;
}>;


export type VerifyAccountByCodeMutation = { __typename?: 'Mutation', verifyAccountByCode: string };

export type AddAppDraftBannerImgMutationVariables = Exact<{
  input: AddAppDraftBannerImgInput;
}>;


export type AddAppDraftBannerImgMutation = { __typename?: 'Mutation', addAppDraftBannerImg: { __typename?: 'BannerImg', _id: string, order: number, image: { __typename?: 'BannerImageUrls', large: string, thumbnail: string } } };

export type AddAppMutationVariables = Exact<{
  input: AddAppInput;
}>;


export type AddAppMutation = { __typename?: 'Mutation', addApp: { __typename?: 'App', _id: string, name: string, shortDesc: string, htmlDesc?: string | null, textDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, slug?: string | null, publishedAt?: any | null, supportsCount: number, commentsCount: number, isSupported: boolean, isFeatured?: boolean | null, bannerImgs?: Array<{ __typename?: 'BannerImg', _id: string, order: number, image: { __typename?: 'BannerImageUrls', large: string, thumbnail: string } } | null> | null, socialUrls?: { __typename?: 'SocialUrls', facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null, status: { __typename?: 'AppStatusObject', key: AppStatus, label: string }, tags?: Array<{ __typename?: 'AppTag', _id: string, name: string, slug: string } | null> | null, ownedBy?: { __typename?: 'SimpleAccount', _id: string, firstName?: string | null, lastName?: string | null, image?: string | null } | null } };

export type AddCommentMutationVariables = Exact<{
  input: AddCommentInput;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment: { __typename?: 'Comment', _id: string } };

export type AppDraftQueryVariables = Exact<{
  _id: Scalars['ID']['input'];
}>;


export type AppDraftQuery = { __typename?: 'Query', appDraft?: { __typename?: 'AppDraft', _id: string, appId: string, name: string, shortDesc: string, jsonDesc?: any | null, htmlDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, createdAt?: any | null, tags?: Array<{ __typename?: 'AppTag', _id: string, name: string, slug: string } | null> | null, bannerImgs?: Array<{ __typename?: 'BannerImg', _id: string, order: number, image: { __typename?: 'BannerImageUrls', large: string, thumbnail: string } } | null> | null, ownedBy?: { __typename?: 'SimpleAccount', _id: string, firstName?: string | null, lastName?: string | null, image?: string | null } | null, status: { __typename?: 'AppDraftStatusObject', key: AppDraftStatus, label: string }, socialUrls?: { __typename?: 'SocialUrls', facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null } | null };

export type AppQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type AppQuery = { __typename?: 'Query', app: { __typename?: 'App', _id: string, name: string, shortDesc: string, htmlDesc?: string | null, textDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, slug?: string | null, publishedAt?: any | null, supportsCount: number, commentsCount: number, isSupported: boolean, isFeatured?: boolean | null, bannerImgs?: Array<{ __typename?: 'BannerImg', _id: string, order: number, image: { __typename?: 'BannerImageUrls', large: string, thumbnail: string } } | null> | null, socialUrls?: { __typename?: 'SocialUrls', facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null, status: { __typename?: 'AppStatusObject', key: AppStatus, label: string }, tags?: Array<{ __typename?: 'AppTag', _id: string, name: string, slug: string } | null> | null, ownedBy?: { __typename?: 'SimpleAccount', _id: string, firstName?: string | null, lastName?: string | null, image?: string | null } | null } };

export type AppTagQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type AppTagQuery = { __typename?: 'Query', appTag?: { __typename?: 'AppTag', _id: string, name: string, slug: string, appsCount: number, imgUrl: string } | null };

export type AppTagsQueryVariables = Exact<{
  searchString?: InputMaybe<Scalars['String']['input']>;
}>;


export type AppTagsQuery = { __typename?: 'Query', appTags?: { __typename?: 'AppTagConnection', totalCount: number, nodes: Array<{ __typename?: 'AppTag', _id: string, name: string, slug: string, appsCount: number, imgUrl: string }> } | null };

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


export type AppsQuery = { __typename?: 'Query', apps?: { __typename?: 'AppConnection', totalCount: number, nodes: Array<{ __typename?: 'App', _id: string, name: string, shortDesc: string, logoImg?: string | null, websiteUrl?: string | null, slug?: string | null, supportsCount: number, commentsCount: number, isSupported: boolean, isFeatured?: boolean | null, tags?: Array<{ __typename?: 'AppTag', _id: string, name: string, slug: string } | null> | null }> } | null };

export type CommentsQueryVariables = Exact<{
  refId: Scalars['ID']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type: CommentType;
}>;


export type CommentsQuery = { __typename?: 'Query', comments?: { __typename?: 'CommentConnection', totalCount: number, nodes: Array<{ __typename?: 'Comment', _id: string, isParent?: boolean | null, htmlContent?: string | null, createdAt: any, isPinned?: boolean | null, supportsCount: number, isSupported: boolean, createdBy: { __typename?: 'SimpleAccount', _id: string, firstName?: string | null, lastName?: string | null, image?: string | null }, status: { __typename?: 'CommentStatusObject', key: CommentStatus, label: string }, comments?: { __typename?: 'CommentConnection', totalCount: number, nodes: Array<{ __typename?: 'Comment', _id: string, htmlContent?: string | null, createdAt: any, supportsCount: number, isSupported: boolean, createdBy: { __typename?: 'SimpleAccount', _id: string, firstName?: string | null, lastName?: string | null, image?: string | null }, status: { __typename?: 'CommentStatusObject', key: CommentStatus, label: string } }> } | null }> } | null };

export type CreateAppDraftFromPublishedAppMutationVariables = Exact<{
  input: CreateAppDraftFromPublishedAppInput;
}>;


export type CreateAppDraftFromPublishedAppMutation = { __typename?: 'Mutation', createAppDraftFromPublishedApp: { __typename?: 'AppDraft', _id: string } };

export type DeleteAppDraftBannerImgMutationVariables = Exact<{
  input: DeleteAppDraftBannerImgInput;
}>;


export type DeleteAppDraftBannerImgMutation = { __typename?: 'Mutation', deleteAppDraftBannerImg: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type DeleteAppDraftMutationVariables = Exact<{
  input: DeleteAppDraftInput;
}>;


export type DeleteAppDraftMutation = { __typename?: 'Mutation', deleteAppDraft: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type DeleteAppMutationVariables = Exact<{
  input: DeleteAppInput;
}>;


export type DeleteAppMutation = { __typename?: 'Mutation', deleteApp: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type MyAppDraftsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyAppDraftsQuery = { __typename?: 'Query', myAppDrafts?: { __typename?: 'AppDraftConnection', totalCount: number, nodes: Array<{ __typename?: 'AppDraft', _id: string, appId: string, name: string, shortDesc: string, jsonDesc?: any | null, htmlDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, createdAt?: any | null, tags?: Array<{ __typename?: 'AppTag', _id: string, name: string } | null> | null, bannerImgs?: Array<{ __typename?: 'BannerImg', _id: string, order: number, image: { __typename?: 'BannerImageUrls', large: string, thumbnail: string } } | null> | null, ownedBy?: { __typename?: 'SimpleAccount', _id: string, firstName?: string | null, lastName?: string | null, image?: string | null } | null, status: { __typename?: 'AppDraftStatusObject', key: AppDraftStatus, label: string }, socialUrls?: { __typename?: 'SocialUrls', facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null }> } | null };

export type MyAppsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyAppsQuery = { __typename?: 'Query', myApps?: { __typename?: 'AppConnection', totalCount: number, nodes: Array<{ __typename?: 'App', _id: string, name: string, shortDesc: string, htmlDesc?: string | null, textDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, slug?: string | null, publishedAt?: any | null, supportsCount: number, commentsCount: number, isSupported: boolean, isFeatured?: boolean | null, bannerImgs?: Array<{ __typename?: 'BannerImg', _id: string, order: number, image: { __typename?: 'BannerImageUrls', large: string, thumbnail: string } } | null> | null, socialUrls?: { __typename?: 'SocialUrls', facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null, status: { __typename?: 'AppStatusObject', key: AppStatus, label: string }, tags?: Array<{ __typename?: 'AppTag', _id: string, name: string, slug: string } | null> | null, ownedBy?: { __typename?: 'SimpleAccount', _id: string, firstName?: string | null, lastName?: string | null, image?: string | null } | null }> } | null };

export type RepublishAppMutationVariables = Exact<{
  input: RepublishAppInput;
}>;


export type RepublishAppMutation = { __typename?: 'Mutation', republishApp: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type SubmitAppDraftMutationVariables = Exact<{
  input: SubmitAppDraftInput;
}>;


export type SubmitAppDraftMutation = { __typename?: 'Mutation', submitAppDraft: { __typename?: 'SubmitAppDraftPayload', errors: Array<string>, isSubmitted: boolean } };

export type ToggleAppSupportMutationVariables = Exact<{
  input: ToggleAppSupportInput;
}>;


export type ToggleAppSupportMutation = { __typename?: 'Mutation', toggleAppSupport: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type UndoSubmitAppDraftMutationVariables = Exact<{
  input: UndoSubmitAppDraftInput;
}>;


export type UndoSubmitAppDraftMutation = { __typename?: 'Mutation', undoSubmitAppDraft: { __typename?: 'AppDraft', _id: string } };

export type UnpublishAppMutationVariables = Exact<{
  input: UnpublishAppInput;
}>;


export type UnpublishAppMutation = { __typename?: 'Mutation', unpublishApp: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type UpdateAppDraftBannerImgsOrderMutationVariables = Exact<{
  input: UpdateAppDraftBannerImgsOrderInput;
}>;


export type UpdateAppDraftBannerImgsOrderMutation = { __typename?: 'Mutation', updateAppDraftBannerImgsOrder: { __typename?: 'DefaultMutationPayload', isCompleted: boolean } };

export type UpdateAppDraftLogoImgMutationVariables = Exact<{
  input: UpdateAppDraftLogoImgInput;
}>;


export type UpdateAppDraftLogoImgMutation = { __typename?: 'Mutation', updateAppDraftLogoImg: string };

export type UpdateAppDraftMutationVariables = Exact<{
  input: UpdateAppDraftInput;
}>;


export type UpdateAppDraftMutation = { __typename?: 'Mutation', updateAppDraft: { __typename?: 'AppDraft', _id: string, appId: string, name: string, shortDesc: string, jsonDesc?: any | null, htmlDesc?: string | null, logoImg?: string | null, videoUrl?: string | null, websiteUrl?: string | null, createdAt?: any | null, tags?: Array<{ __typename?: 'AppTag', _id: string, name: string } | null> | null, bannerImgs?: Array<{ __typename?: 'BannerImg', _id: string, order: number, image: { __typename?: 'BannerImageUrls', large: string, thumbnail: string } } | null> | null, ownedBy?: { __typename?: 'SimpleAccount', _id: string, firstName?: string | null, lastName?: string | null, image?: string | null } | null, status: { __typename?: 'AppDraftStatusObject', key: AppDraftStatus, label: string }, socialUrls?: { __typename?: 'SocialUrls', facebook?: string | null, instagram?: string | null, twitter?: string | null, linkedIn?: string | null, github?: string | null } | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]} as unknown as DocumentNode<MyProfileQuery, MyProfileQueryVariables>;
export const ResetPasswordByTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPasswordByToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordByTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordByToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordByTokenMutation, ResetPasswordByTokenMutationVariables>;
export const SendPasswordResetLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendPasswordResetLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendPasswordResetLinkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendPasswordResetLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<SendPasswordResetLinkMutation, SendPasswordResetLinkMutationVariables>;
export const SendVerificationCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendVerificationCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendVerificationCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendVerificationCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<SendVerificationCodeMutation, SendVerificationCodeMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const VerifyAccountByCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyAccountByCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyAccountByCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAccountByCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<VerifyAccountByCodeMutation, VerifyAccountByCodeMutationVariables>;
export const AddAppDraftBannerImgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAppDraftBannerImg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddAppDraftBannerImgInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAppDraftBannerImg"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}}]}}]}}]} as unknown as DocumentNode<AddAppDraftBannerImgMutation, AddAppDraftBannerImgMutationVariables>;
export const AddAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"textDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"supportsCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isSupported"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}}]}}]} as unknown as DocumentNode<AddAppMutation, AddAppMutationVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const AppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"jsonDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<AppDraftQuery, AppDraftQueryVariables>;
export const AppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"App"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"textDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"supportsCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isSupported"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}}]}}]} as unknown as DocumentNode<AppQuery, AppQueryVariables>;
export const AppTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"appsCount"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]}}]} as unknown as DocumentNode<AppTagQuery, AppTagQueryVariables>;
export const AppTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"appsCount"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<AppTagsQuery, AppTagsQueryVariables>;
export const AppsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Apps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publishedFromDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publishedToDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otherFilters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppsOtherFilter"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AppsSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}},{"kind":"Argument","name":{"kind":"Name","value":"tagSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}}},{"kind":"Argument","name":{"kind":"Name","value":"publishedFromDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publishedFromDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"publishedToDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publishedToDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"otherFilters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherFilters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"supportsCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isSupported"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<AppsQuery, AppsQueryVariables>;
export const CommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"comments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isParent"}},{"kind":"Field","name":{"kind":"Name","value":"htmlContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supportsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isSupported"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"htmlContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supportsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isSupported"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<CommentsQuery, CommentsQueryVariables>;
export const CreateAppDraftFromPublishedAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAppDraftFromPublishedApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAppDraftFromPublishedAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAppDraftFromPublishedApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateAppDraftFromPublishedAppMutation, CreateAppDraftFromPublishedAppMutationVariables>;
export const DeleteAppDraftBannerImgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAppDraftBannerImg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAppDraftBannerImgInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAppDraftBannerImg"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<DeleteAppDraftBannerImgMutation, DeleteAppDraftBannerImgMutationVariables>;
export const DeleteAppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAppDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAppDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<DeleteAppDraftMutation, DeleteAppDraftMutationVariables>;
export const DeleteAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<DeleteAppMutation, DeleteAppMutationVariables>;
export const MyAppDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyAppDrafts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myAppDrafts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"jsonDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<MyAppDraftsQuery, MyAppDraftsQueryVariables>;
export const MyAppsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyApps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myApps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"textDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"supportsCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isSupported"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<MyAppsQuery, MyAppsQueryVariables>;
export const RepublishAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RepublishApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RepublishAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"republishApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<RepublishAppMutation, RepublishAppMutationVariables>;
export const SubmitAppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitAppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubmitAppDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitAppDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"isSubmitted"}}]}}]}}]} as unknown as DocumentNode<SubmitAppDraftMutation, SubmitAppDraftMutationVariables>;
export const ToggleAppSupportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleAppSupport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToggleAppSupportInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleAppSupport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<ToggleAppSupportMutation, ToggleAppSupportMutationVariables>;
export const UndoSubmitAppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UndoSubmitAppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UndoSubmitAppDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"undoSubmitAppDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UndoSubmitAppDraftMutation, UndoSubmitAppDraftMutationVariables>;
export const UnpublishAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnpublishApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnpublishAppInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unpublishApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<UnpublishAppMutation, UnpublishAppMutationVariables>;
export const UpdateAppDraftBannerImgsOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppDraftBannerImgsOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAppDraftBannerImgsOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAppDraftBannerImgsOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode<UpdateAppDraftBannerImgsOrderMutation, UpdateAppDraftBannerImgsOrderMutationVariables>;
export const UpdateAppDraftLogoImgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppDraftLogoImg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAppDraftLogoImgInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAppDraftLogoImg"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UpdateAppDraftLogoImgMutation, UpdateAppDraftLogoImgMutationVariables>;
export const UpdateAppDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAppDraftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAppDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"jsonDesc"}},{"kind":"Field","name":{"kind":"Name","value":"htmlDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialUrls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<UpdateAppDraftMutation, UpdateAppDraftMutationVariables>;