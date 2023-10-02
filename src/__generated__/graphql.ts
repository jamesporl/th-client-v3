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

export type AddCommentToAppInput = {
  appId: Scalars['ID']['input'];
  jsonContent: Scalars['JSON']['input'];
  parentCommentId?: InputMaybe<Scalars['ID']['input']>;
};

export type AddJobInput = {
  jobType: Scalars['String']['input'];
  schedule?: InputMaybe<Scalars['String']['input']>;
};

export type App = Node & {
  __typename?: 'App';
  _id: Scalars['ID']['output'];
  appStoreUrl?: Maybe<Scalars['String']['output']>;
  bannerImgs?: Maybe<Array<Maybe<BannerImg>>>;
  commentsCount: Scalars['Int']['output'];
  htmlDesc?: Maybe<Scalars['String']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isSupported: Scalars['Boolean']['output'];
  jsonDesc?: Maybe<Scalars['JSON']['output']>;
  logoImg?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownedBy?: Maybe<SimpleAccount>;
  playStoreUrl?: Maybe<Scalars['String']['output']>;
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

export type AppComment = Node & {
  __typename?: 'AppComment';
  _id: Scalars['ID']['output'];
  comments?: Maybe<AppCommentConnection>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: SimpleAccount;
  htmlContent?: Maybe<Scalars['String']['output']>;
  isParent?: Maybe<Scalars['Boolean']['output']>;
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  isSupported: Scalars['Boolean']['output'];
  status: AppCommentStatusObject;
  supportsCount: Scalars['Int']['output'];
  textContent?: Maybe<Scalars['String']['output']>;
};

export type AppCommentConnection = NodeConnection & {
  __typename?: 'AppCommentConnection';
  nodes: Array<AppComment>;
  totalCount: Scalars['Int']['output'];
};

export enum AppCommentStatus {
  Deleted = 'deleted',
  Published = 'published'
}

export type AppCommentStatusObject = {
  __typename?: 'AppCommentStatusObject';
  key: AppCommentStatus;
  label: Scalars['String']['output'];
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
  appStoreUrl?: Maybe<Scalars['String']['output']>;
  bannerImgs?: Maybe<Array<Maybe<BannerImg>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  htmlDesc?: Maybe<Scalars['String']['output']>;
  jsonDesc?: Maybe<Scalars['JSON']['output']>;
  logoImg?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownedBy?: Maybe<SimpleAccount>;
  playStoreUrl?: Maybe<Scalars['String']['output']>;
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

export type CreateAppDraftFromPublishedAppInput = {
  appId: Scalars['ID']['input'];
};

export type DefaultMutationPayload = {
  __typename?: 'DefaultMutationPayload';
  isCompleted: Scalars['Boolean']['output'];
};

export type DeleteAppCommentInput = {
  commentId: Scalars['ID']['input'];
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
  addCommentToApp: AppComment;
  addJob: DefaultMutationPayload;
  createAppDraftFromPublishedApp: AppDraft;
  createGoogleOAuthUrl: Scalars['String']['output'];
  deleteApp: DefaultMutationPayload;
  deleteAppComment: DefaultMutationPayload;
  deleteAppDraft: DefaultMutationPayload;
  deleteAppDraftBannerImg: DefaultMutationPayload;
  deleteAppDraftLogoImg: DefaultMutationPayload;
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
  toggleAppCommentSupport: DefaultMutationPayload;
  toggleAppSupport: DefaultMutationPayload;
  togglePinAppComment: DefaultMutationPayload;
  undoSubmitAppDraft: AppDraft;
  unpublishApp: DefaultMutationPayload;
  updateAppDraft: AppDraft;
  updateAppDraftBannerImgsOrder: DefaultMutationPayload;
  updateAppDraftLogoImg: DefaultMutationPayload;
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


export type MutationAddCommentToAppArgs = {
  input: AddCommentToAppInput;
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


export type MutationDeleteAppCommentArgs = {
  input: DeleteAppCommentInput;
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


export type MutationToggleAppCommentSupportArgs = {
  input: ToggleAppCommentSupportInput;
};


export type MutationToggleAppSupportArgs = {
  input: ToggleAppSupportInput;
};


export type MutationTogglePinAppCommentArgs = {
  input: TogglePinAppCommentInput;
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
  appComments?: Maybe<AppCommentConnection>;
  appDraft?: Maybe<AppDraft>;
  appTag?: Maybe<AppTag>;
  appTags?: Maybe<AppTagConnection>;
  apps?: Maybe<AppConnection>;
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


export type QueryAppCommentsArgs = {
  appId?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
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

export type ToggleAppCommentSupportInput = {
  commentId: Scalars['ID']['input'];
};

export type ToggleAppSupportInput = {
  appId: Scalars['ID']['input'];
};

export type TogglePinAppCommentInput = {
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
  appStoreUrl?: InputMaybe<Scalars['String']['input']>;
  jsonDesc?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  playStoreUrl?: InputMaybe<Scalars['String']['input']>;
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

export type AppsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  tagSlug?: InputMaybe<Scalars['String']['input']>;
  publishedFromDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedToDate?: InputMaybe<Scalars['DateTime']['input']>;
  otherFilters?: InputMaybe<Array<AppsOtherFilter> | AppsOtherFilter>;
  sortBy?: InputMaybe<AppsSortBy>;
}>;


export type AppsQuery = { __typename?: 'Query', apps?: { __typename?: 'AppConnection', totalCount: number, nodes: Array<{ __typename?: 'App', _id: string, name: string, shortDesc: string, logoImg?: string | null, websiteUrl?: string | null, slug?: string | null, supportsCount: number, commentsCount: number, isSupported: boolean, isFeatured?: boolean | null, tags?: Array<{ __typename?: 'AppTag', _id: string, name: string, slug: string } | null> | null }> } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]} as unknown as DocumentNode<MyProfileQuery, MyProfileQueryVariables>;
export const AppsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Apps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publishedFromDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publishedToDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otherFilters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppsOtherFilter"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AppsSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"tagSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagSlug"}}},{"kind":"Argument","name":{"kind":"Name","value":"publishedFromDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publishedFromDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"publishedToDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publishedToDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"otherFilters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherFilters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDesc"}},{"kind":"Field","name":{"kind":"Name","value":"logoImg"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"supportsCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isSupported"}},{"kind":"Field","name":{"kind":"Name","value":"isFeatured"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<AppsQuery, AppsQueryVariables>;