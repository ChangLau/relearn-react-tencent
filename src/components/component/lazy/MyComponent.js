import React, { Suspense } from "react";
import MyErrorBoundary from "./MyErrorBoundary";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

const MyComponent = () => {
  return (
    <div>
      {/* 异常捕获边界 */}
      <MyErrorBoundary>
        {/* 异步组件加载 */}
        <Suspense fallback="加载中....">
          <OtherComponent></OtherComponent>
        </Suspense>
      </MyErrorBoundary>
    </div>
  );
};

export default MyComponent;
