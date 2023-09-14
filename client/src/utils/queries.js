  
import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;