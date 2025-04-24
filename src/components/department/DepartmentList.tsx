/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { toast } from 'react-hot-toast';
import { useGetAllDepartmentsQuery } from '../../hooks/departmentHooks.ts';
import { Department } from '../../types/department.ts';
import DepartmentItem from './DepartmentItem.tsx';
import Loading from '../shared/Loading.tsx';

const DepartmentList = () => {
  const { data, isLoading, error } = useGetAllDepartmentsQuery();

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error('Something went wrong');
  }

  return (
    <div className='mt-8 w-full'>
      {data?.map((dep: Department) => (
        <DepartmentItem key={dep?.id} department={dep} />
      ))}
    </div>
  );
};

export default DepartmentList;
