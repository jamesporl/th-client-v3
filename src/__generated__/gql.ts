/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login($input: LoginInput!) {\n    login(input: $input)\n  }\n": types.LoginDocument,
    "\n  query MyProfile {\n    myProfile {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n    }\n  }\n": types.MyProfileDocument,
    "\n  mutation SendVerificationCode($input: SendVerificationCodeInput!) {\n    sendVerificationCode(input: $input) {\n      isCompleted\n    }\n  }\n": types.SendVerificationCodeDocument,
    "\n  mutation Signup($input: SignupInput!) {\n    signup(input: $input) {\n      isCompleted\n    }\n  }\n": types.SignupDocument,
    "\n  mutation VerifyAccountByCode($input: VerifyAccountByCodeInput!) {\n    verifyAccountByCode(input: $input)\n  }\n": types.VerifyAccountByCodeDocument,
    "\n  mutation AddAppDraftBannerImg($input: AddAppDraftBannerImgInput!) {\n    addAppDraftBannerImg(input: $input) {\n      _id\n      order\n      image {\n        large\n        thumbnail\n      }\n    }\n  }\n": types.AddAppDraftBannerImgDocument,
    "\n  mutation AddApp($input: AddAppInput!) {\n    addApp(input: $input) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      supportsCount\n      commentsCount\n      isSupported\n      isFeatured\n    }\n  }\n": types.AddAppDocument,
    "\n  query AppDraft($_id: ID!) {\n    appDraft(_id: $_id) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      createdAt\n    }\n  }\n": types.AppDraftDocument,
    "\n  query App($slug: String!) {\n    app(slug: $slug) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      supportsCount\n      commentsCount\n      isSupported\n      isFeatured\n    }\n  }\n": types.AppDocument,
    "\n  query AppTags($searchString: String) {\n    appTags(searchString: $searchString) {\n      nodes {\n        _id\n        name\n        slug\n        appsCount\n        imgUrl\n      }\n      totalCount\n    }\n  }\n": types.AppTagsDocument,
    "\n  query Apps(\n    $page: Int\n    $pageSize: Int\n    $tagSlug: String\n    $publishedFromDate: DateTime\n    $publishedToDate: DateTime\n    $otherFilters: [AppsOtherFilter!]\n    $sortBy: AppsSortBy\n  ) {\n    apps(\n      page: $page\n      pageSize: $pageSize\n      tagSlug: $tagSlug\n      publishedFromDate: $publishedFromDate\n      publishedToDate: $publishedToDate\n      otherFilters: $otherFilters\n      sortBy: $sortBy\n    ) {\n      nodes {\n        _id\n        name\n        shortDesc\n        logoImg\n        tags {\n          _id\n          name\n          slug\n        }\n        websiteUrl\n        slug\n        supportsCount\n        commentsCount\n        isSupported\n        isFeatured\n      }\n      totalCount\n    }\n  }\n": types.AppsDocument,
    "\n  mutation DeleteAppDraftBannerImg($input: DeleteAppDraftBannerImgInput!) {\n    deleteAppDraftBannerImg(input: $input) {\n      isCompleted\n    }\n  }\n": types.DeleteAppDraftBannerImgDocument,
    "\n  query MyAppDrafts {\n    myAppDrafts {\n      nodes {\n        _id\n        appId\n        name\n        shortDesc\n        jsonDesc\n        htmlDesc\n        logoImg\n        tags {\n          _id\n          name\n        }\n        videoUrl\n        bannerImgs {\n          _id\n          image {\n            large\n            thumbnail\n          }\n          order\n        }\n        ownedBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        appStoreUrl\n        playStoreUrl\n        websiteUrl\n        status {\n          key\n          label\n        }\n        socialUrls {\n          facebook\n          instagram\n          twitter\n          linkedIn\n          github\n        }\n        createdAt\n      }\n      totalCount\n    }\n  }\n": types.MyAppDraftsDocument,
    "\n  mutation UpdateAppDraftBannerImgsOrder($input: UpdateAppDraftBannerImgsOrderInput!) {\n    updateAppDraftBannerImgsOrder(input: $input) {\n      isCompleted\n    }\n  }\n": types.UpdateAppDraftBannerImgsOrderDocument,
    "\n  mutation UpdateAppDraftLogoImg($input: UpdateAppDraftLogoImgInput!) {\n    updateAppDraftLogoImg(input: $input)\n  }\n": types.UpdateAppDraftLogoImgDocument,
    "\n  mutation UpdateAppDraft($input: UpdateAppDraftInput!) {\n    updateAppDraft(input: $input) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      createdAt\n    }\n  }\n": types.UpdateAppDraftDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($input: LoginInput!) {\n    login(input: $input)\n  }\n"): (typeof documents)["\n  mutation Login($input: LoginInput!) {\n    login(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyProfile {\n    myProfile {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n    }\n  }\n"): (typeof documents)["\n  query MyProfile {\n    myProfile {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SendVerificationCode($input: SendVerificationCodeInput!) {\n    sendVerificationCode(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation SendVerificationCode($input: SendVerificationCodeInput!) {\n    sendVerificationCode(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Signup($input: SignupInput!) {\n    signup(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation Signup($input: SignupInput!) {\n    signup(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VerifyAccountByCode($input: VerifyAccountByCodeInput!) {\n    verifyAccountByCode(input: $input)\n  }\n"): (typeof documents)["\n  mutation VerifyAccountByCode($input: VerifyAccountByCodeInput!) {\n    verifyAccountByCode(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddAppDraftBannerImg($input: AddAppDraftBannerImgInput!) {\n    addAppDraftBannerImg(input: $input) {\n      _id\n      order\n      image {\n        large\n        thumbnail\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddAppDraftBannerImg($input: AddAppDraftBannerImgInput!) {\n    addAppDraftBannerImg(input: $input) {\n      _id\n      order\n      image {\n        large\n        thumbnail\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddApp($input: AddAppInput!) {\n    addApp(input: $input) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      supportsCount\n      commentsCount\n      isSupported\n      isFeatured\n    }\n  }\n"): (typeof documents)["\n  mutation AddApp($input: AddAppInput!) {\n    addApp(input: $input) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      supportsCount\n      commentsCount\n      isSupported\n      isFeatured\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AppDraft($_id: ID!) {\n    appDraft(_id: $_id) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query AppDraft($_id: ID!) {\n    appDraft(_id: $_id) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query App($slug: String!) {\n    app(slug: $slug) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      supportsCount\n      commentsCount\n      isSupported\n      isFeatured\n    }\n  }\n"): (typeof documents)["\n  query App($slug: String!) {\n    app(slug: $slug) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      supportsCount\n      commentsCount\n      isSupported\n      isFeatured\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AppTags($searchString: String) {\n    appTags(searchString: $searchString) {\n      nodes {\n        _id\n        name\n        slug\n        appsCount\n        imgUrl\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query AppTags($searchString: String) {\n    appTags(searchString: $searchString) {\n      nodes {\n        _id\n        name\n        slug\n        appsCount\n        imgUrl\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Apps(\n    $page: Int\n    $pageSize: Int\n    $tagSlug: String\n    $publishedFromDate: DateTime\n    $publishedToDate: DateTime\n    $otherFilters: [AppsOtherFilter!]\n    $sortBy: AppsSortBy\n  ) {\n    apps(\n      page: $page\n      pageSize: $pageSize\n      tagSlug: $tagSlug\n      publishedFromDate: $publishedFromDate\n      publishedToDate: $publishedToDate\n      otherFilters: $otherFilters\n      sortBy: $sortBy\n    ) {\n      nodes {\n        _id\n        name\n        shortDesc\n        logoImg\n        tags {\n          _id\n          name\n          slug\n        }\n        websiteUrl\n        slug\n        supportsCount\n        commentsCount\n        isSupported\n        isFeatured\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query Apps(\n    $page: Int\n    $pageSize: Int\n    $tagSlug: String\n    $publishedFromDate: DateTime\n    $publishedToDate: DateTime\n    $otherFilters: [AppsOtherFilter!]\n    $sortBy: AppsSortBy\n  ) {\n    apps(\n      page: $page\n      pageSize: $pageSize\n      tagSlug: $tagSlug\n      publishedFromDate: $publishedFromDate\n      publishedToDate: $publishedToDate\n      otherFilters: $otherFilters\n      sortBy: $sortBy\n    ) {\n      nodes {\n        _id\n        name\n        shortDesc\n        logoImg\n        tags {\n          _id\n          name\n          slug\n        }\n        websiteUrl\n        slug\n        supportsCount\n        commentsCount\n        isSupported\n        isFeatured\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAppDraftBannerImg($input: DeleteAppDraftBannerImgInput!) {\n    deleteAppDraftBannerImg(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAppDraftBannerImg($input: DeleteAppDraftBannerImgInput!) {\n    deleteAppDraftBannerImg(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyAppDrafts {\n    myAppDrafts {\n      nodes {\n        _id\n        appId\n        name\n        shortDesc\n        jsonDesc\n        htmlDesc\n        logoImg\n        tags {\n          _id\n          name\n        }\n        videoUrl\n        bannerImgs {\n          _id\n          image {\n            large\n            thumbnail\n          }\n          order\n        }\n        ownedBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        appStoreUrl\n        playStoreUrl\n        websiteUrl\n        status {\n          key\n          label\n        }\n        socialUrls {\n          facebook\n          instagram\n          twitter\n          linkedIn\n          github\n        }\n        createdAt\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query MyAppDrafts {\n    myAppDrafts {\n      nodes {\n        _id\n        appId\n        name\n        shortDesc\n        jsonDesc\n        htmlDesc\n        logoImg\n        tags {\n          _id\n          name\n        }\n        videoUrl\n        bannerImgs {\n          _id\n          image {\n            large\n            thumbnail\n          }\n          order\n        }\n        ownedBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        appStoreUrl\n        playStoreUrl\n        websiteUrl\n        status {\n          key\n          label\n        }\n        socialUrls {\n          facebook\n          instagram\n          twitter\n          linkedIn\n          github\n        }\n        createdAt\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAppDraftBannerImgsOrder($input: UpdateAppDraftBannerImgsOrderInput!) {\n    updateAppDraftBannerImgsOrder(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAppDraftBannerImgsOrder($input: UpdateAppDraftBannerImgsOrderInput!) {\n    updateAppDraftBannerImgsOrder(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAppDraftLogoImg($input: UpdateAppDraftLogoImgInput!) {\n    updateAppDraftLogoImg(input: $input)\n  }\n"): (typeof documents)["\n  mutation UpdateAppDraftLogoImg($input: UpdateAppDraftLogoImgInput!) {\n    updateAppDraftLogoImg(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAppDraft($input: UpdateAppDraftInput!) {\n    updateAppDraft(input: $input) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAppDraft($input: UpdateAppDraftInput!) {\n    updateAppDraft(input: $input) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      appStoreUrl\n      playStoreUrl\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        twitter\n        linkedIn\n        github\n      }\n      createdAt\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;