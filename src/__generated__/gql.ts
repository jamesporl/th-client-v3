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
    "\n  mutation LoginWithGoogle($input: LoginWithGoogleInput!) {\n    loginWithGoogle(input: $input)\n  }\n": types.LoginWithGoogleDocument,
    "\n  query MyProfile {\n    myProfile {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n      bio\n      websiteUrl\n      location\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      lastSeenAt\n    }\n  }\n": types.MyProfileDocument,
    "\n  mutation ResetPasswordByToken($input: ResetPasswordByTokenInput!) {\n    resetPasswordByToken(input: $input) {\n      isCompleted\n    }\n  }\n": types.ResetPasswordByTokenDocument,
    "\n  mutation SendPasswordResetLink($input: SendPasswordResetLinkInput!) {\n    sendPasswordResetLink(input: $input) {\n      isCompleted\n    }\n  }\n": types.SendPasswordResetLinkDocument,
    "\n  mutation SendVerificationCode($input: SendVerificationCodeInput!) {\n    sendVerificationCode(input: $input) {\n      isCompleted\n    }\n  }\n": types.SendVerificationCodeDocument,
    "\n  mutation Signup($input: SignupInput!) {\n    signup(input: $input) {\n      isCompleted\n    }\n  }\n": types.SignupDocument,
    "\n  mutation VerifyAccountByCode($input: VerifyAccountByCodeInput!) {\n    verifyAccountByCode(input: $input)\n  }\n": types.VerifyAccountByCodeDocument,
    "\n  mutation AddAnalyticsEvent($input: AddAnalyticsEventInput!) {\n    addAnalyticsEvent(input: $input) {\n      isCompleted\n    }\n  }\n": types.AddAnalyticsEventDocument,
    "\n  mutation AddAppDraftBannerImg($input: AddAppDraftBannerImgInput!) {\n    addAppDraftBannerImg(input: $input) {\n      _id\n      order\n      image {\n        large\n        thumbnail\n      }\n    }\n  }\n": types.AddAppDraftBannerImgDocument,
    "\n  mutation AddApp($input: AddAppInput!) {\n    addApp(input: $input) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      upvotesCount\n      commentsCount\n      isUpvoted\n      isFeatured\n    }\n  }\n": types.AddAppDocument,
    "\n  mutation AddComment($input: AddCommentInput!) {\n    addComment(input: $input) {\n      _id\n      refId\n      createdBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      isParent\n      htmlContent\n      createdAt\n      isPinned\n      upvotesCount\n      isUpvoted\n      parentCommentId\n    }\n  }\n": types.AddCommentDocument,
    "\n  query AppDraft($_id: ID!) {\n    appDraft(_id: $_id) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n        slug\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      createdAt\n    }\n  }\n": types.AppDraftDocument,
    "\n  query App($slug: String!) {\n    app(slug: $slug) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      upvotesCount\n      commentsCount\n      isUpvoted\n      isFeatured\n    }\n  }\n": types.AppDocument,
    "\n  query AppTag($slug: String!) {\n    appTag(slug: $slug) {\n      _id\n      name\n      slug\n      appsCount\n      imgUrl\n    }\n  }\n": types.AppTagDocument,
    "\n  query AppTags($searchString: String) {\n    appTags(searchString: $searchString) {\n      nodes {\n        _id\n        name\n        slug\n        appsCount\n        imgUrl\n      }\n      totalCount\n    }\n  }\n": types.AppTagsDocument,
    "\n  query Apps(\n    $page: Int\n    $pageSize: Int\n    $tagSlug: String\n    $searchString: String\n    $publishedFromDate: DateTime\n    $publishedToDate: DateTime\n    $otherFilters: [AppsOtherFilter!]\n    $sortBy: AppsSortBy\n  ) {\n    apps(\n      page: $page\n      pageSize: $pageSize\n      searchString: $searchString\n      tagSlug: $tagSlug\n      publishedFromDate: $publishedFromDate\n      publishedToDate: $publishedToDate\n      otherFilters: $otherFilters\n      sortBy: $sortBy\n    ) {\n      nodes {\n        _id\n        name\n        shortDesc\n        logoImg\n        tags {\n          _id\n          name\n          slug\n        }\n        websiteUrl\n        slug\n        upvotesCount\n        commentsCount\n        isUpvoted\n        isFeatured\n      }\n      totalCount\n    }\n  }\n": types.AppsDocument,
    "\n  query comments(\n    $refId: ID!\n    $type: CommentType!\n    $lastId: ID\n    $pageSize: Int\n    $childCommentsPageSize: Int\n    $isPinned: Boolean!\n    $parentCommentId: ID\n  ) {\n    comments(\n      refId: $refId\n      type: $type\n      lastId: $lastId\n      pageSize: $pageSize\n      childCommentsPageSize: $childCommentsPageSize\n      isPinned: $isPinned\n      parentCommentId: $parentCommentId\n    ) {\n      nodes {\n        _id\n        refId\n        createdBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        isParent\n        parentCommentId\n        htmlContent\n        createdAt\n        isPinned\n        upvotesCount\n        isUpvoted\n        comments {\n          nodes {\n            _id\n            refId\n            createdBy {\n              _id\n              firstName\n              lastName\n              image\n            }\n            isParent\n            htmlContent\n            createdAt\n            isPinned\n            parentCommentId\n            upvotesCount\n            isUpvoted\n          }\n          hasMore\n        }\n      }\n      hasMore\n    }\n  }\n": types.CommentsDocument,
    "\n  mutation CreateAppDraftFromPublishedApp($input: CreateAppDraftFromPublishedAppInput!) {\n    createAppDraftFromPublishedApp(input: $input) {\n      _id\n    }\n  }\n": types.CreateAppDraftFromPublishedAppDocument,
    "\n  mutation DeleteAppDraftBannerImg($input: DeleteAppDraftBannerImgInput!) {\n    deleteAppDraftBannerImg(input: $input) {\n      isCompleted\n    }\n  }\n": types.DeleteAppDraftBannerImgDocument,
    "\n  mutation DeleteAppDraft($input: DeleteAppDraftInput!) {\n    deleteAppDraft(input: $input) {\n      isCompleted\n    }\n  }\n": types.DeleteAppDraftDocument,
    "\n  mutation DeleteApp($input: DeleteAppInput!) {\n    deleteApp(input: $input) {\n      isCompleted\n    }\n  }\n": types.DeleteAppDocument,
    "\n  mutation DeleteComment($input: DeleteCommentInput!) {\n    deleteComment(input: $input) {\n      isCompleted\n    }\n  }\n": types.DeleteCommentDocument,
    "\n  query MyAppDrafts {\n    myAppDrafts {\n      nodes {\n        _id\n        appId\n        name\n        shortDesc\n        jsonDesc\n        htmlDesc\n        logoImg\n        tags {\n          _id\n          name\n        }\n        videoUrl\n        bannerImgs {\n          _id\n          image {\n            large\n            thumbnail\n          }\n          order\n        }\n        ownedBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        websiteUrl\n        status {\n          key\n          label\n        }\n        socialUrls {\n          facebook\n          instagram\n          x\n          linkedIn\n          github\n          threads\n          tiktok\n        }\n        createdAt\n      }\n      totalCount\n    }\n  }\n": types.MyAppDraftsDocument,
    "\n  query MyApps {\n    myApps {\n      nodes {\n        _id\n        name\n        shortDesc\n        htmlDesc\n        textDesc\n        logoImg\n        videoUrl\n        bannerImgs {\n          _id\n          image {\n            large\n            thumbnail\n          }\n          order\n        }\n        socialUrls {\n          facebook\n          instagram\n          x\n          linkedIn\n          github\n          threads\n          tiktok\n        }\n        websiteUrl\n        status {\n          key\n          label\n        }\n        tags {\n          _id\n          name\n          slug\n        }\n        ownedBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        slug\n        publishedAt\n        upvotesCount\n        commentsCount\n        isUpvoted\n        isFeatured\n        analytics {\n          views\n          websiteClicks\n          facebookClicks\n          instagramClicks\n          xClicks\n          linkedInClicks\n          githubClicks\n          threadsClicks\n          tiktokClicks\n        }\n      }\n      totalCount\n    }\n  }\n": types.MyAppsDocument,
    "\n  mutation RepublishApp($input: RepublishAppInput!) {\n    republishApp(input: $input) {\n      isCompleted\n    }\n  }\n": types.RepublishAppDocument,
    "\n  mutation SubmitAppDraft($input: SubmitAppDraftInput!) {\n    submitAppDraft(input: $input) {\n      errors\n      isSubmitted\n    }\n  }\n": types.SubmitAppDraftDocument,
    "\n  mutation TogglePinComment($input: TogglePinCommentInput!) {\n    togglePinComment(input: $input) {\n      isCompleted\n    }\n  }\n": types.TogglePinCommentDocument,
    "\n  mutation ToggleUpvote($input: ToggleUpvoteInput!) {\n    toggleUpvote(input: $input) {\n      isCompleted\n    }\n  }\n": types.ToggleUpvoteDocument,
    "\n  mutation UndoSubmitAppDraft($input: UndoSubmitAppDraftInput!) {\n    undoSubmitAppDraft(input: $input) {\n      _id\n    }\n  }\n": types.UndoSubmitAppDraftDocument,
    "\n  mutation UnpublishApp($input: UnpublishAppInput!) {\n    unpublishApp(input: $input) {\n      isCompleted\n    }\n  }\n": types.UnpublishAppDocument,
    "\n  mutation UpdateAccountLastSeenAt {\n    updateAccountLastSeenAt {\n      isCompleted\n    }\n  }\n": types.UpdateAccountLastSeenAtDocument,
    "\n  mutation UpdateAppDraftBannerImgsOrder($input: UpdateAppDraftBannerImgsOrderInput!) {\n    updateAppDraftBannerImgsOrder(input: $input) {\n      isCompleted\n    }\n  }\n": types.UpdateAppDraftBannerImgsOrderDocument,
    "\n  mutation UpdateAppDraftLogoImg($input: UpdateAppDraftLogoImgInput!) {\n    updateAppDraftLogoImg(input: $input)\n  }\n": types.UpdateAppDraftLogoImgDocument,
    "\n  mutation UpdateAppDraft($input: UpdateAppDraftInput!) {\n    updateAppDraft(input: $input) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      createdAt\n    }\n  }\n": types.UpdateAppDraftDocument,
    "\n  mutation UpdatePersonalInfo($input: UpdatePersonalInfoInput!) {\n    updatePersonalInfo(input: $input) {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n      bio\n      websiteUrl\n      location\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      lastSeenAt\n    }\n  }\n": types.UpdatePersonalInfoDocument,
    "\n  mutation UpdateProfilePhoto($input: UpdateProfilePhotoInput!) {\n    updateProfilePhoto(input: $input) {\n      isCompleted\n    }\n  }\n": types.UpdateProfilePhotoDocument,
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
export function gql(source: "\n  mutation LoginWithGoogle($input: LoginWithGoogleInput!) {\n    loginWithGoogle(input: $input)\n  }\n"): (typeof documents)["\n  mutation LoginWithGoogle($input: LoginWithGoogleInput!) {\n    loginWithGoogle(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyProfile {\n    myProfile {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n      bio\n      websiteUrl\n      location\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      lastSeenAt\n    }\n  }\n"): (typeof documents)["\n  query MyProfile {\n    myProfile {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n      bio\n      websiteUrl\n      location\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      lastSeenAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ResetPasswordByToken($input: ResetPasswordByTokenInput!) {\n    resetPasswordByToken(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation ResetPasswordByToken($input: ResetPasswordByTokenInput!) {\n    resetPasswordByToken(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SendPasswordResetLink($input: SendPasswordResetLinkInput!) {\n    sendPasswordResetLink(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation SendPasswordResetLink($input: SendPasswordResetLinkInput!) {\n    sendPasswordResetLink(input: $input) {\n      isCompleted\n    }\n  }\n"];
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
export function gql(source: "\n  mutation AddAnalyticsEvent($input: AddAnalyticsEventInput!) {\n    addAnalyticsEvent(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation AddAnalyticsEvent($input: AddAnalyticsEventInput!) {\n    addAnalyticsEvent(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddAppDraftBannerImg($input: AddAppDraftBannerImgInput!) {\n    addAppDraftBannerImg(input: $input) {\n      _id\n      order\n      image {\n        large\n        thumbnail\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddAppDraftBannerImg($input: AddAppDraftBannerImgInput!) {\n    addAppDraftBannerImg(input: $input) {\n      _id\n      order\n      image {\n        large\n        thumbnail\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddApp($input: AddAppInput!) {\n    addApp(input: $input) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      upvotesCount\n      commentsCount\n      isUpvoted\n      isFeatured\n    }\n  }\n"): (typeof documents)["\n  mutation AddApp($input: AddAppInput!) {\n    addApp(input: $input) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      upvotesCount\n      commentsCount\n      isUpvoted\n      isFeatured\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddComment($input: AddCommentInput!) {\n    addComment(input: $input) {\n      _id\n      refId\n      createdBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      isParent\n      htmlContent\n      createdAt\n      isPinned\n      upvotesCount\n      isUpvoted\n      parentCommentId\n    }\n  }\n"): (typeof documents)["\n  mutation AddComment($input: AddCommentInput!) {\n    addComment(input: $input) {\n      _id\n      refId\n      createdBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      isParent\n      htmlContent\n      createdAt\n      isPinned\n      upvotesCount\n      isUpvoted\n      parentCommentId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AppDraft($_id: ID!) {\n    appDraft(_id: $_id) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n        slug\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query AppDraft($_id: ID!) {\n    appDraft(_id: $_id) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n        slug\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query App($slug: String!) {\n    app(slug: $slug) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      upvotesCount\n      commentsCount\n      isUpvoted\n      isFeatured\n    }\n  }\n"): (typeof documents)["\n  query App($slug: String!) {\n    app(slug: $slug) {\n      _id\n      name\n      shortDesc\n      htmlDesc\n      textDesc\n      logoImg\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      tags {\n        _id\n        name\n        slug\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      slug\n      publishedAt\n      upvotesCount\n      commentsCount\n      isUpvoted\n      isFeatured\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AppTag($slug: String!) {\n    appTag(slug: $slug) {\n      _id\n      name\n      slug\n      appsCount\n      imgUrl\n    }\n  }\n"): (typeof documents)["\n  query AppTag($slug: String!) {\n    appTag(slug: $slug) {\n      _id\n      name\n      slug\n      appsCount\n      imgUrl\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AppTags($searchString: String) {\n    appTags(searchString: $searchString) {\n      nodes {\n        _id\n        name\n        slug\n        appsCount\n        imgUrl\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query AppTags($searchString: String) {\n    appTags(searchString: $searchString) {\n      nodes {\n        _id\n        name\n        slug\n        appsCount\n        imgUrl\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Apps(\n    $page: Int\n    $pageSize: Int\n    $tagSlug: String\n    $searchString: String\n    $publishedFromDate: DateTime\n    $publishedToDate: DateTime\n    $otherFilters: [AppsOtherFilter!]\n    $sortBy: AppsSortBy\n  ) {\n    apps(\n      page: $page\n      pageSize: $pageSize\n      searchString: $searchString\n      tagSlug: $tagSlug\n      publishedFromDate: $publishedFromDate\n      publishedToDate: $publishedToDate\n      otherFilters: $otherFilters\n      sortBy: $sortBy\n    ) {\n      nodes {\n        _id\n        name\n        shortDesc\n        logoImg\n        tags {\n          _id\n          name\n          slug\n        }\n        websiteUrl\n        slug\n        upvotesCount\n        commentsCount\n        isUpvoted\n        isFeatured\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query Apps(\n    $page: Int\n    $pageSize: Int\n    $tagSlug: String\n    $searchString: String\n    $publishedFromDate: DateTime\n    $publishedToDate: DateTime\n    $otherFilters: [AppsOtherFilter!]\n    $sortBy: AppsSortBy\n  ) {\n    apps(\n      page: $page\n      pageSize: $pageSize\n      searchString: $searchString\n      tagSlug: $tagSlug\n      publishedFromDate: $publishedFromDate\n      publishedToDate: $publishedToDate\n      otherFilters: $otherFilters\n      sortBy: $sortBy\n    ) {\n      nodes {\n        _id\n        name\n        shortDesc\n        logoImg\n        tags {\n          _id\n          name\n          slug\n        }\n        websiteUrl\n        slug\n        upvotesCount\n        commentsCount\n        isUpvoted\n        isFeatured\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query comments(\n    $refId: ID!\n    $type: CommentType!\n    $lastId: ID\n    $pageSize: Int\n    $childCommentsPageSize: Int\n    $isPinned: Boolean!\n    $parentCommentId: ID\n  ) {\n    comments(\n      refId: $refId\n      type: $type\n      lastId: $lastId\n      pageSize: $pageSize\n      childCommentsPageSize: $childCommentsPageSize\n      isPinned: $isPinned\n      parentCommentId: $parentCommentId\n    ) {\n      nodes {\n        _id\n        refId\n        createdBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        isParent\n        parentCommentId\n        htmlContent\n        createdAt\n        isPinned\n        upvotesCount\n        isUpvoted\n        comments {\n          nodes {\n            _id\n            refId\n            createdBy {\n              _id\n              firstName\n              lastName\n              image\n            }\n            isParent\n            htmlContent\n            createdAt\n            isPinned\n            parentCommentId\n            upvotesCount\n            isUpvoted\n          }\n          hasMore\n        }\n      }\n      hasMore\n    }\n  }\n"): (typeof documents)["\n  query comments(\n    $refId: ID!\n    $type: CommentType!\n    $lastId: ID\n    $pageSize: Int\n    $childCommentsPageSize: Int\n    $isPinned: Boolean!\n    $parentCommentId: ID\n  ) {\n    comments(\n      refId: $refId\n      type: $type\n      lastId: $lastId\n      pageSize: $pageSize\n      childCommentsPageSize: $childCommentsPageSize\n      isPinned: $isPinned\n      parentCommentId: $parentCommentId\n    ) {\n      nodes {\n        _id\n        refId\n        createdBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        isParent\n        parentCommentId\n        htmlContent\n        createdAt\n        isPinned\n        upvotesCount\n        isUpvoted\n        comments {\n          nodes {\n            _id\n            refId\n            createdBy {\n              _id\n              firstName\n              lastName\n              image\n            }\n            isParent\n            htmlContent\n            createdAt\n            isPinned\n            parentCommentId\n            upvotesCount\n            isUpvoted\n          }\n          hasMore\n        }\n      }\n      hasMore\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateAppDraftFromPublishedApp($input: CreateAppDraftFromPublishedAppInput!) {\n    createAppDraftFromPublishedApp(input: $input) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAppDraftFromPublishedApp($input: CreateAppDraftFromPublishedAppInput!) {\n    createAppDraftFromPublishedApp(input: $input) {\n      _id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAppDraftBannerImg($input: DeleteAppDraftBannerImgInput!) {\n    deleteAppDraftBannerImg(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAppDraftBannerImg($input: DeleteAppDraftBannerImgInput!) {\n    deleteAppDraftBannerImg(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAppDraft($input: DeleteAppDraftInput!) {\n    deleteAppDraft(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAppDraft($input: DeleteAppDraftInput!) {\n    deleteAppDraft(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteApp($input: DeleteAppInput!) {\n    deleteApp(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteApp($input: DeleteAppInput!) {\n    deleteApp(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteComment($input: DeleteCommentInput!) {\n    deleteComment(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteComment($input: DeleteCommentInput!) {\n    deleteComment(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyAppDrafts {\n    myAppDrafts {\n      nodes {\n        _id\n        appId\n        name\n        shortDesc\n        jsonDesc\n        htmlDesc\n        logoImg\n        tags {\n          _id\n          name\n        }\n        videoUrl\n        bannerImgs {\n          _id\n          image {\n            large\n            thumbnail\n          }\n          order\n        }\n        ownedBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        websiteUrl\n        status {\n          key\n          label\n        }\n        socialUrls {\n          facebook\n          instagram\n          x\n          linkedIn\n          github\n          threads\n          tiktok\n        }\n        createdAt\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query MyAppDrafts {\n    myAppDrafts {\n      nodes {\n        _id\n        appId\n        name\n        shortDesc\n        jsonDesc\n        htmlDesc\n        logoImg\n        tags {\n          _id\n          name\n        }\n        videoUrl\n        bannerImgs {\n          _id\n          image {\n            large\n            thumbnail\n          }\n          order\n        }\n        ownedBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        websiteUrl\n        status {\n          key\n          label\n        }\n        socialUrls {\n          facebook\n          instagram\n          x\n          linkedIn\n          github\n          threads\n          tiktok\n        }\n        createdAt\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyApps {\n    myApps {\n      nodes {\n        _id\n        name\n        shortDesc\n        htmlDesc\n        textDesc\n        logoImg\n        videoUrl\n        bannerImgs {\n          _id\n          image {\n            large\n            thumbnail\n          }\n          order\n        }\n        socialUrls {\n          facebook\n          instagram\n          x\n          linkedIn\n          github\n          threads\n          tiktok\n        }\n        websiteUrl\n        status {\n          key\n          label\n        }\n        tags {\n          _id\n          name\n          slug\n        }\n        ownedBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        slug\n        publishedAt\n        upvotesCount\n        commentsCount\n        isUpvoted\n        isFeatured\n        analytics {\n          views\n          websiteClicks\n          facebookClicks\n          instagramClicks\n          xClicks\n          linkedInClicks\n          githubClicks\n          threadsClicks\n          tiktokClicks\n        }\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query MyApps {\n    myApps {\n      nodes {\n        _id\n        name\n        shortDesc\n        htmlDesc\n        textDesc\n        logoImg\n        videoUrl\n        bannerImgs {\n          _id\n          image {\n            large\n            thumbnail\n          }\n          order\n        }\n        socialUrls {\n          facebook\n          instagram\n          x\n          linkedIn\n          github\n          threads\n          tiktok\n        }\n        websiteUrl\n        status {\n          key\n          label\n        }\n        tags {\n          _id\n          name\n          slug\n        }\n        ownedBy {\n          _id\n          firstName\n          lastName\n          image\n        }\n        slug\n        publishedAt\n        upvotesCount\n        commentsCount\n        isUpvoted\n        isFeatured\n        analytics {\n          views\n          websiteClicks\n          facebookClicks\n          instagramClicks\n          xClicks\n          linkedInClicks\n          githubClicks\n          threadsClicks\n          tiktokClicks\n        }\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RepublishApp($input: RepublishAppInput!) {\n    republishApp(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation RepublishApp($input: RepublishAppInput!) {\n    republishApp(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SubmitAppDraft($input: SubmitAppDraftInput!) {\n    submitAppDraft(input: $input) {\n      errors\n      isSubmitted\n    }\n  }\n"): (typeof documents)["\n  mutation SubmitAppDraft($input: SubmitAppDraftInput!) {\n    submitAppDraft(input: $input) {\n      errors\n      isSubmitted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation TogglePinComment($input: TogglePinCommentInput!) {\n    togglePinComment(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation TogglePinComment($input: TogglePinCommentInput!) {\n    togglePinComment(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ToggleUpvote($input: ToggleUpvoteInput!) {\n    toggleUpvote(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation ToggleUpvote($input: ToggleUpvoteInput!) {\n    toggleUpvote(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UndoSubmitAppDraft($input: UndoSubmitAppDraftInput!) {\n    undoSubmitAppDraft(input: $input) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation UndoSubmitAppDraft($input: UndoSubmitAppDraftInput!) {\n    undoSubmitAppDraft(input: $input) {\n      _id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnpublishApp($input: UnpublishAppInput!) {\n    unpublishApp(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation UnpublishApp($input: UnpublishAppInput!) {\n    unpublishApp(input: $input) {\n      isCompleted\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAccountLastSeenAt {\n    updateAccountLastSeenAt {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAccountLastSeenAt {\n    updateAccountLastSeenAt {\n      isCompleted\n    }\n  }\n"];
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
export function gql(source: "\n  mutation UpdateAppDraft($input: UpdateAppDraftInput!) {\n    updateAppDraft(input: $input) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAppDraft($input: UpdateAppDraftInput!) {\n    updateAppDraft(input: $input) {\n      _id\n      appId\n      name\n      shortDesc\n      jsonDesc\n      htmlDesc\n      logoImg\n      tags {\n        _id\n        name\n      }\n      videoUrl\n      bannerImgs {\n        _id\n        image {\n          large\n          thumbnail\n        }\n        order\n      }\n      ownedBy {\n        _id\n        firstName\n        lastName\n        image\n      }\n      websiteUrl\n      status {\n        key\n        label\n      }\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdatePersonalInfo($input: UpdatePersonalInfoInput!) {\n    updatePersonalInfo(input: $input) {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n      bio\n      websiteUrl\n      location\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      lastSeenAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePersonalInfo($input: UpdatePersonalInfoInput!) {\n    updatePersonalInfo(input: $input) {\n      _id\n      firstName\n      lastName\n      email\n      shortDesc\n      image\n      isAdmin\n      bio\n      websiteUrl\n      location\n      socialUrls {\n        facebook\n        instagram\n        x\n        linkedIn\n        github\n        threads\n        tiktok\n      }\n      lastSeenAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateProfilePhoto($input: UpdateProfilePhotoInput!) {\n    updateProfilePhoto(input: $input) {\n      isCompleted\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfilePhoto($input: UpdateProfilePhotoInput!) {\n    updateProfilePhoto(input: $input) {\n      isCompleted\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;