import { gql } from '../../../__generated__/gql';

export default gql(`
  mutation AddAnalyticsEvent($input: AddAnalyticsEventInput!) {
    addAnalyticsEvent(input: $input) {
      isCompleted
    }
  }
`);
