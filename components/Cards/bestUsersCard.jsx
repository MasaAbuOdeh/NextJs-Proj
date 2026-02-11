import { Star, User } from 'lucide-react';

export default function UserStatsCard({
  amount = 0,
  label = '',       // صححت typo من lable -> label
  rating = 0,
  userName = '',
  numberOfSession = '',
}) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition-shadow duration-200">
      
      {/* Left Section: User Info + Icon */}
      <div className="flex items-center gap-3">
        {/* User Icon */}
        <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-100">
          <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 text-gray-600 shadow-sm">
            <User className="w-4 h-4" />
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-start text-left">
          <span className="text-base sm:text-lg font-semibold text-gray-900">
            {userName}
          </span>
          {numberOfSession && (
            <span className="text-xs text-gray-400">{numberOfSession}</span>
          )}
        </div>
      </div>

      {/* Right Section: Amount + Label + Rating */}
      <div className="flex flex-col items-end sm:items-end gap-2">
        <div className="flex items-baseline gap-1">
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            {amount}
          </span>

          {label && (
            <span className="text-xs sm:text-sm text-gray-500 font-medium">
              {label}
            </span>
          )}
        </div>  
          <div className="flex justify-center sm:justify-start"> <div className="inline-flex items-center ml-5 px-1.5 py-[3px] bg-gray-100 rounded-md text-[11px] font-medium text-gray-700 leading-none"> <span>{rating}</span> <span className="flex items-center text-yellow-500 [&_svg]:w-3 [&_svg]:h-3 [&_svg]:fill-current"> <Star /> </span> </div> </div>
      </div>
    </div>
  );
}

