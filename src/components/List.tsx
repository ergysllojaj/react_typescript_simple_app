import React from "react";

interface IProps {
  people: {
    name: String;
    age: number;
    url: string;
    note?: string;
  }[];
}

export const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="list-header">
            <img src={person.url} className="list-img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="list-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};
