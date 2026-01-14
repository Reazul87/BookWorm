import React from "react";

const GlobalLoading = () => {
  return (
    <div className="min-h-[calc(100vh-292px)] flex flex-col items-center justify-center gap-4">
      <div className="w-14 h-14 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
      <p className="text-lg font-medium text-gray-600">
        Loading, please wait...
      </p>
    </div>
  );
};

export default GlobalLoading;
