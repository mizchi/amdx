import React from "react";

export function History(props: {
  repository?: string;
  history: Array<{
    hash: string;
    author: string;
    message: string;
    date: string;
  }>;
}) {
  return (
    <details>
      <summary>History</summary>
      {props.history.map((commit, index) => {
        return (
          <div key={index}>
            {props.repository ? (
              <a
                href={`https://github.com/${props.repository}/commit/${commit.hash}`}
              >
                {commit.hash} - {commit.message}
              </a>
            ) : (
              <span>
                {commit.hash} - {commit.message}
              </span>
            )}
            &nbsp;
            {commit.date}&nbsp;
          </div>
        );
      })}
    </details>
  );
}
