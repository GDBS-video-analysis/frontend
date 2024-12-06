import { IPostsContextValue } from '@shared/services/posts-provider/interfaces';
import { createContext, useContext } from 'react';

const PostsContextDefaultValue: IPostsContextValue = {
  isLoading: true,
};

const PostsContext = createContext(PostsContextDefaultValue);

const usePostsContext = () => useContext(PostsContext);

export { usePostsContext, PostsContext, PostsContextDefaultValue };
