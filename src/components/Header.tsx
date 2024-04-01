import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deauth } from "store/slices/userSlice";
import { RootState } from "store/store";
import styled from "styled-components";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deAuth = () => {
    dispatch(deauth());
    navigate("/login");
  };

  return (
    <HeaderStyles>
      <div className="container">
        <Link to="/" className="logo">
          <img src="./icons/logo-header.svg" alt="logo" />
        </Link>
        <nav data-open={isOpen}>
          <ul onClick={() => setIsOpen((prev) => !prev)}>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <a href="#">Тарифы</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
        {isAuth ? (
          <div className="user">
            <div className="user-data">
              <p>
                <span>Использовано компаний</span> <span>34</span>
              </p>
              <p>
                <span>Лимит по компаниям</span> <span>100</span>
              </p>
            </div>
            <div className="user-info" data-open={isOpen}>
              <div>
                <p>Aleksey A.</p>
                <button onClick={() => deAuth()}>Выйти</button>
              </div>
              <picture>
                <img src="/public/images/icon.png" alt="icon" />
              </picture>
            </div>
          </div>
        ) : (
          <div
            className="sign"
            data-open={isOpen}
            onClick={() => setIsOpen(false)}
          >
            <button className="sign-up">Зарегистрироваться</button>
            <span>|</span>
            <button className="sign-in">
              <Link to={"/login"}>Войти</Link>
            </button>
          </div>
        )}

        <div
          data-open={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="burger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.header`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--background);
  }

  ul {
    display: flex;
    align-items: center;
    gap: 4.9rem;
    font-size: 14px;

    li {
      transition: all 300ms linear;
    }

    li:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.main1};
    }
  }

  .sign {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    font-size: 14px;
    letter-spacing: 0.14px;

    &-up {
      opacity: 0.4;
    }

    &-in {
      border-radius: 5px;
      background: #7ce3e1;
      a {
        display: inline-block;
        text-align: center;
        padding: 5px 10px;
        font-weight: 500;
      }
    }

    span {
      opacity: 0.6;
      color: #029491;
      font-size: 20px;
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 12.8rem;
    transition: all 800ms ease-in-out;

    &-data {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 12px 10px 15px;
      border-radius: 5px;
      background: #d9d9d94d;

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
    }

    &-info {
      display: flex;
      gap: 5px;

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 3px;

        p {
          font-size: 14px;
          letter-spacing: 0.14px;
        }

        button {
          font-size: 10px;
          opacity: 0.4;
        }
      }

      picture {
        border-radius: 50%;
        overflow: hidden;
        width: 32px;
        height: 32px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .burger {
    display: none;
  }

  @media (max-width: 810px) {
    .user {
      gap: 20px;
    }
  }

  @media (max-width: 750px) {
    header {
      margin-bottom: 2rem;
    }

    nav {
      transform: translateY(-100%);
      background: ${(props) => props.theme.colors.main1};
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 2;
      transition: all 800ms ease-in-out;

      &::before {
        content: url(./images/icons/logo-footer.svg);
        position: absolute;
        top: -22px;
        left: 15px;
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90%;
        font-size: 16px;
        letter-spacing: 0.16px;
        color: ${(props) => props.theme.colors.main3};
        gap: 26px;
        transform: scale(1, 0.2);
        transition: all 1000ms ease-in-out;
        transition-delay: 100ms;

        li:hover {
          cursor: auto;
          color: inherit;
        }
      }
      &[data-open="true"] {
        transform: translateX(0);

        ul {
          transform: scale(1);
        }
      }
    }

    .sign {
      position: absolute;
      z-index: 3;
      display: flex;
      flex-direction: column;
      gap: 20px;
      bottom: 20%;
      left: 0;
      right: 0;
      transform: translateY(-100vh);
      transition: all 900ms ease-in-out;

      span {
        display: none;
      }

      &-up {
        font-size: 16px;
        letter-spacing: 0.16px;
        color: ${(props) => props.theme.colors.main3};
      }

      &-in {
        a {
          padding: 14px 0;
          width: 295px;
          font-size: 20px;
          letter-spacing: 0.2px;
        }
      }

      &[data-open="true"] {
        transform: translateY(0);
      }
    }

    .user {
      &-info {
        position: absolute;
        bottom: 20%;
        transform: translateY(-100vh);
        transition: all 900ms ease-in-out;
        z-index: 3;
        color: #fff;
        width: 100vw;
        left: 0;
        justify-content: center;

        div {
          align-items: center;
          p,
          button {
            font-size: 25px;
          }
        }
        picture {
          display: none;
        }

        &[data-open="true"] {
          transform: translate(0);
        }
      }
    }

    .burger {
      display: flex;
      z-index: 10;
      flex-direction: column;
      gap: 5px;

      &:hover {
        cursor: pointer;
      }

      span {
        display: block;
        width: 30px;
        height: 5px;
        background-color: ${(props) => props.theme.colors.main1};
        transition: all 300ms linear;
      }

      &[data-open="true"] {
        span {
          background-color: ${(props) => props.theme.colors.main3};

          &:first-child {
            transform: rotate(45deg) translate(7px, 7px);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:last-child {
            transform: rotate(-45deg) translate(7px, -7px);
          }
        }
      }
    }
  }
`;

export default Header;
