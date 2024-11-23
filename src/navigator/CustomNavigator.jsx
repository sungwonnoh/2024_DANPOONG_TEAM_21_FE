import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../navigator/header";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const CustomNavigator = ({ routes }) => {
  return (
    <Routes>
      {routes?.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <PageWrapper
              component={route.component}
              headerOptions={route.headerOptions}
            />
          }
        />
      ))}
    </Routes>
  );
};

const PageWrapper = ({ component: Component, headerOptions }) => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      {headerOptions?.headerShown !== false && (
        <Header
          title={headerOptions?.title}
          showBackButton={headerOptions?.showBackButton}
          onBack={() => navigate(-1)}
        />
      )}
      <Content>
        <Component />
      </Content>
    </PageContainer>
  );
};

export default CustomNavigator;
