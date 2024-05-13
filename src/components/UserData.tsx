import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "store/slices/userSlice";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";

interface IProps {
  usedCompany: number;
  companyLimit: number;
}

const UserData: FC<IProps> = ({ usedCompany, companyLimit }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoaded = useSelector((state: RootState) => state.user.isLoaded);

  useEffect(() => {
    dispatch(info());
  }, [dispatch]);

  return (
    <UserDataStyle>
      {isLoaded ? (
        <>
          <p>
            <span>Использовано компаний</span> <span>{usedCompany}</span>
          </p>
          <p>
            <span>Лимит по компаниям</span> <span>{companyLimit}</span>
          </p>
        </>
      ) : (
        <picture>
          <img src="./icons/loader.png" alt="loader" />
        </picture>
      )}
    </UserDataStyle>
  );
};

const UserDataStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 12px 10px 15px;
  border-radius: 5px;
  background: #d9d9d94d;
  min-width: 175px;
  height: 63px;

  p {
    span:first-child {
      font-size: 10px;
      opacity: 0.4;
      margin-right: 9px;
    }

    span:last-child {
      color: #000;
      font-size: 14px;
      font-weight: 700;
      opacity: 1;
    }

    &:last-child {
      span:last-child {
        color: #8ac540;
      }
    }
  }

  picture {
    width: 100%;
    text-align: center;
    img {
      width: 24px;
      animation: rotate 1500ms linear infinite;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  @media (max-width: 500px) {
    min-width: 130px;
  }
`;

export default UserData;
