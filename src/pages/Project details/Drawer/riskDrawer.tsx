import { FaTimes } from 'react-icons/fa';

import { theme } from '../../../theme/color';
import Add_Risk from '../../../Forms/Addrisk';
import { FilterDrawerProps } from '../../../Types';




const RiskDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {

  const closeDrawer = () => {
    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full lg:w-1/2 w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 gap-5 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-row justify-between items-center p-4 ">
        <div className="flex flex-row gap-4">
          <h2 className="text-md font-semibold">Add Risk</h2>
        </div>
        <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
  <button
    onClick={closeDrawer}
    className="text-gray-600 hover:text-red-500"
  >
    <FaTimes />
  </button>
</div>

      </div>
{/* ------------------------------------------------------ */}
      <div className="flex flex-col gap-5 p-4 overflow-y-auto max-h-[100vh]">
        {/* <CircularProgress activeForm={activeForm} goToForm={goToForm} /> */}
   <Add_Risk mode={'create'}/>
      </div>

      {/* الأزرار */}
      <div className="fixed bottom-8 left-0 right-0 w-full bg-[#F9F9F9] h-20 flex items-center px-6 gap-5">
        <div className="flex justify-start items-center gap-4">
        
         
           <button
           type="button"
           className="text-white w-48 py-2 rounded-lg"
           style={{ backgroundColor: theme.primary }}
        //    onClick={goToNextForm}
         >
          Save new Risk
         </button>
         
         
        </div>
        <button
           type="button"
           className="text-white w-48 py-2 rounded-lg "
           style={{ backgroundColor: theme.buttonGraybg,
            border: `1px solid ${theme.buttonGrayborder}`, // عدّل على حسب اسم اللون المناسب بداخل الـ theme
            color: theme.buttonGraytext // أو أي لون تريده



            }}
           onClick={closeDrawer}
         >
Cancel        </button>
      </div>
    </div>
  );
};

export default RiskDrawer;
