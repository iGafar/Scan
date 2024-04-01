import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Select from "react-select";
import styled from "styled-components";

interface ISearchFields {
  INN: string;
  tonality: { value: string; label: string };
  quantity: number;
}

const onSubmit: SubmitHandler<ISearchFields> = (data): void => {
  console.log(data);
};

const options = [
  { value: "any", label: "Любая" },
  { value: "positive", label: "Позитивная" },
  { value: "negative", label: "Негативная" },
];

const SearchForm: FC = () => {
  const { register, control, handleSubmit } = useForm<ISearchFields>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SearchFormStyle onSubmit={handleSubmit(onSubmit)}>
      <InfoBlockStyle>
        <label>
          <p>ИНН компании*</p>
          <input
            type="number"
            placeholder="10 цифр"
            id="INN"
            {...register("INN")}
          />
        </label>

        <label>
          <p>Тональность</p>
          <Controller
            name="tonality"
            control={control}
            render={({ field }) => (
              <Select
                classNamePrefix="select"
                className="select"
                {...field}
                options={options}
                defaultValue={options[0]}
              />
            )}
          />
        </label>

        <label>
          <p>Количество документов в выдаче*</p>
          <input
            type="number"
            placeholder="От 1 до 1000"
            {...register("quantity")}
          />
        </label>

        <label>
          <p>Диапазон поиска*</p>

          <input type="date" placeholder="Дата начала" className="date" />
          <input type="date" placeholder="Дата конца" className="date" />
        </label>
      </InfoBlockStyle>

      <ChekBlockStyle>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="list-button"
          type="button"
        >
          {isOpen ? "Закрыть список" : "Открыть список"}
        </button>
        <div className={!isOpen ? "list-hide" : ""}>
          <label>
            <input type="checkbox" />
            <span></span>
            <p> Признак максимальной полноты</p>
          </label>
          <label>
            <input type="checkbox" />
            <span></span>
            <p>Упоминания в бизнес-контексте</p>
          </label>
          <label>
            <input type="checkbox" />
            <span></span>
            <p>Главная роль в публикации</p>
          </label>
          <label>
            <input type="checkbox" />
            <span></span>
            <p>Публикации только с риск-факторами</p>
          </label>
          <label>
            <input type="checkbox" />
            <span></span>
            <p>Включать технические новости рынков</p>
          </label>
          <label>
            <input type="checkbox" />
            <span></span>
            <p>Включать анонсы и календари</p>
          </label>
          <label>
            <input type="checkbox" />
            <span></span>
            <p>Включать сводки новостей</p>
          </label>
        </div>

        <button type="submit">
          <Link to={"/issue"}>Поиск</Link>
        </button>
        <p className="note">* Обязательные к заполнению поля</p>
      </ChekBlockStyle>
    </SearchFormStyle>
  );
};

const SearchFormStyle = styled.form`
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 34px 40px;
  max-width: 872px;
  display: flex;
  gap: 11px;

  label {
    p {
      margin-bottom: 20px;
      font-size: 18px;
      letter-spacing: 0.54px;
    }
  }

  @media (max-width: 1340px) {
    flex-direction: column;
    width: max-content;
  }

  @media (max-width: 900px) {
    margin: 0 auto 24px auto;
  }

  @media (max-width: 500px) {
    width: 100vw;
    margin-left: -15px;
    padding: 24px 14px 37px;
  }
`;

const InfoBlockStyle = styled.div`
  label {
    display: block;
    margin-bottom: 30px;

    input {
      width: 242px;
      border-radius: 5px;
      border: 1px solid #c7c7c7;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
      text-align: center;
      padding: 13px 0;
      appearance: none;
      font-size: 14px;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      &[type="number"] {
        appearance: none;
        -moz-appearance: textfield;
      }
    }

    .date {
      width: 176px;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }

    .select__control {
      box-shadow: none;
      border: 1px solid #c7c7c7;
      background: #fff;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
      max-width: 242px;
      height: 43px;
      font-size: 14px;

      .select__indicator-separator {
        display: none;
      }

      .select__value-container {
        padding-left: 22px;
      }

      .select__indicator {
        background: url(./icons/select-arrow.svg) no-repeat center;
        margin-right: 15px;
        transition: all 200ms linear;
        width: 20px;

        svg {
          display: none;
        }
      }
    }
    .select__control--menu-is-open .select__indicator {
      transform: rotateX(0.5turn);
    }

    .select__menu {
      width: 242px;
      font-size: 14px;

      &-list {
        padding: 0 !important;
      }
    }

    .select__option--is-focused,
    .select__option--is-selected {
      background-color: ${(props) => props.theme.colors.extra3};
    }
    .select__option--is-focused {
      color: ${(props) => props.theme.colors.main3};
    }
  }

  label {
    input {
      width: 100%;
    }
  }

  .select__control {
    min-width: 100%;
  }

  .select__menu {
    min-width: 100%;
  }
`;

const ChekBlockStyle = styled.div`
  display: flex;
  flex-direction: column;

  .list-button {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 17px;
    margin-bottom: 15px;

    p {
      margin-bottom: 0;
      opacity: 0.4;
    }

    input {
      width: 0;
      height: 0;
      z-index: -1;
      position: absolute;
      opacity: 0;
    }

    span {
      width: 20px;
      height: 20px;
      border: 1px solid ${(props) => props.theme.colors.main2};
      background: ${(props) => props.theme.colors.main3};
      z-index: 2;
      opacity: 0.4;

      &::before {
        content: "";
        background: url(./icons/check-arrow.svg) no-repeat 2px 2px;
        width: 20px;
        height: 20px;
        display: inline-block;
        transform: scale(0);
        transition: all 200ms linear;
      }
    }

    input:checked + span {
      opacity: 1;

      &::before {
        transform: scale(1);
      }
    }

    input:focus + span {
      box-shadow: 0 0 5px ${(props) => props.theme.colors.extra3};
    }

    input:checked ~ p {
      opacity: 1;
    }
  }

  button {
    border-radius: 5px;
    background: ${(props) => props.theme.colors.extra3};
    color: ${(props) => props.theme.colors.main3};
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.66px;
    margin: auto 0 10px auto;
    transition: all 300ms linear;

    a {
      display: inline-block;
      width: 305px;
      padding: 16px;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.main1};
    }
  }

  .note {
    color: #949494;
    letter-spacing: 0.42px;
    width: 305px;
    margin-left: auto;
    font-size: 14px;
  }

  @media (max-width: 1340px) {
    .list-button {
      display: block;
      width: 100%;
      padding: 16px;
      margin-bottom: 20px;
    }
    .list-hide {
      display: none;
    }
    div {
      animation: 500ms opening ease;
      width: 370px;
      overflow: hidden;
    }
    button {
      width: 100%;
    }
    .note {
      margin: 0;
    }

    @keyframes opening {
      from {
        transform: translateY(-20px);
        height: 0px;
      }
      to {
        transform: translateY(0);
        height: 294px;
      }
    }
  }

  @media (max-width: 500px) {
    div {
      width: 100%;
    }
  }
`;

export default SearchForm;
