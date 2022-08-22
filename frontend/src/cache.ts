import { InMemoryCache, makeVar, gql } from '@apollo/client';

export interface IUserInfo {
  name: string;
  email: string;
  trader: string | null;
  isOpa: boolean;
}

export const USER_INFO = gql`
  query userInfo {
    userInfo @client
  }
`;

export const userInfo = makeVar<IUserInfo>({} as IUserInfo);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        userInfo: {
          read() {
            return userInfo();
          },
        },
      },
    },
  },
});
