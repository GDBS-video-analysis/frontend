import { useGetPostsUseCase } from '@entities/case/posts/use-case';
import { IPost } from '@shared/interfaces/posts';
import { UseQueryResult } from '@tanstack/react-query';

export const useGetPostsPresenter = (): UseQueryResult<IPost[]> => {
  return useGetPostsUseCase();
};
