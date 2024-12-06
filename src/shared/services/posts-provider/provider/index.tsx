import { useGetPostsPresenter } from "@entities/case/posts/presenter";
import {
  PostsContext,
  PostsContextDefaultValue,
} from "@shared/services/posts-provider/hook";
import { IPostsContextValue } from "@shared/services/posts-provider/interfaces";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const PostsProvider = () => {
  const [value, setValue] = useState<IPostsContextValue>(
    PostsContextDefaultValue
  );
  const { data, isLoading } = useGetPostsPresenter();

  useEffect(() => {
    if (data) setValue({ data, isLoading });
  }, [data, isLoading]);
  return (
    <PostsContext.Provider value={value}>
      <Outlet />
    </PostsContext.Provider>
  );
};
