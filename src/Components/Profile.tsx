import React from "react";
import styled from "styled-components";
import Computer from "../Static/image/computer.png";
import Avatar from "../Static/image/avatar.svg";
import { media } from "src/config/_mixin";

const ProfileContainer = styled.section`
  background-color: #fff;
  color: #0a0a0a;
  padding-top: 2rem;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center !important;
`;

const ProfileBodyContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`;

const ProfileBodyWrapper = styled.div`
  margin: 0 auto;
  position: relative;
`;

const ProfileBody = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -0.75rem;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
`;

const ProfileBodyInner = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
`;

const ProfileBodyHeader = styled.h1`
  color: #293347;
  color: #0a0a0a;
  margin-bottom: 1.5rem;
  color: #293347;
  font-weight: 800;
  color: #363636;
  font-size: 2rem;
  font-weight: bolder;
  line-height: 1.125;
  word-break: break-word;
  font-size: 2.5rem !important;
`;

const ProfileBodySubHeader = styled.h2`
  color: rgba(10, 10, 10, 0.9);
  margin-bottom: 1.5rem;
  font-family: "europa", sans-serif;
  font-weight: 300;
  line-height: 1.5;
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.25;
  word-break: break-word;
`;

const ProfileImage = styled.img`
  margin: 2rem 0;
  width: 150px;
  height: auto;
  max-width: 100%;
  ${media.tablet`
    width: 210px;
    `}
`;

const ProfileFooter = styled.div`
  padding: 0rem 1.5rem;
  flex-grow: 0;
  flex-shrink: 0;
`;

const ComputerImage = styled.img`
  margin-bottom: -0.45rem;
  max-width: 860px;
  margin-bottom: -0.4rem;
  height: auto;
`;

export default class Profile extends React.Component {
  public render() {
    return (
      <ProfileContainer>
        <ProfileBodyContainer>
          <ProfileBodyWrapper>
            <ProfileBody>
              <ProfileBodyInner>
                <ProfileBodyHeader>개자이너 풀스택 워너비</ProfileBodyHeader>
                <ProfileBodySubHeader>
                  저는 코딩과 디자인을 좋아합니다, 그리고 저는 제가 하는 일이
                  즐겁습니다.
                </ProfileBodySubHeader>
                <ProfileImage src={Avatar} />
              </ProfileBodyInner>
            </ProfileBody>
          </ProfileBodyWrapper>
        </ProfileBodyContainer>
        <ProfileFooter>
          <ComputerImage src={Computer} />
        </ProfileFooter>
      </ProfileContainer>
    );
  }
}
