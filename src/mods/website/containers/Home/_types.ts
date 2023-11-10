import { AppsQuery } from '../../../../__generated__/graphql';

export type AppsByMonth = {
  month: Date;
  apps: AppsQuery['apps']['nodes'];
  totalCount: number;
  page: number;
}[];

export type AppsByMonthLoading = {
  month: Date;
  isLoading: boolean;
}[];
