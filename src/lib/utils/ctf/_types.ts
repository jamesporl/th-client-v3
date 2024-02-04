export type CtfRichTextContent = {
  nodeType: 'text' | 'document' | 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5' | 'heading-6' | 'unordered-list' | 'ordered-list' | 'list-item';
  value: string;
  data: unknown;
  marks: {
    type: 'bold' | 'italic' | 'underline' | 'code';
  }[];
  content?: CtfRichTextContent[];
};

export type CtfPrivacyPolicyItem = {
  fields: {
    content: CtfRichTextContent;
    effectiveDate: string;
  }
};

export type CtfPrivacyPolicyResp = {
  items: CtfPrivacyPolicyItem[]
};

export type CtfTermsOfUseItem = {
  fields: {
    content: CtfRichTextContent;
    effectiveDate: string;
  }
};

export type CtfTermsOfUseResp = {
  items: CtfTermsOfUseItem[]
};
