import { useGetEventEmployeeUseCase } from '@entities/case/employees/get-event-employee/use-case';
import { EEmployeeQueryParams } from '@shared/enums/params/employee';
import { ERoutes } from '@shared/enums/routes';
import { IEventEmployeeDto } from '@shared/interfaces/employees';
import { IEmployeeIdQueryParams } from '@shared/interfaces/params/employee';
import { IEventIdQueryParams } from '@shared/interfaces/params/event';
import { getRouteWithId } from '@shared/utils/scripts/getRouteWithId';
import { UseQueryResult } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

type IUseGetEventEmployeePresenterReturn = UseQueryResult<IEventEmployeeDto> & {
  port: IEmployeeIdQueryParams & IEventIdQueryParams;
  handleButtonClick(): void;
};

export const useGetEventEmployeePresenter =
  (): IUseGetEventEmployeePresenterReturn => {
    const nav = useNavigate();
    const port = useParams() as unknown as IEmployeeIdQueryParams &
      IEventIdQueryParams;
    const response = useGetEventEmployeeUseCase(port);
    const handleButtonClick = () => {
      nav(
        getRouteWithId(
          ERoutes.EMPLOYEE,
          EEmployeeQueryParams.EMPLOYEE_ID,
          port.employeeId
        )
      );
    };

    return {
      port,
      handleButtonClick,
      ...response,
    };
  };
