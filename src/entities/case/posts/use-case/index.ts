import { getPosts } from '@entities/slice/posts';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IPost } from '@shared/interfaces/posts';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetPostsUseCase = (): UseQueryResult<IPost[]> => {
  const callback = () => {
    return getPosts();
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_POSTS],
    queryFn: callback,
  });
};
