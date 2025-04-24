import DepartmentSection from './components/department/DepartmentSection.tsx';
import EmployeeSection from './components/employee/EmployeeSection.tsx';

const App = () => {
  return (
    <div className='flex gap-3 h-full w-full min-h-screen p-5 flex-wrap'>
      <DepartmentSection />
      <EmployeeSection />
    </div>
  );
};

export default App;
