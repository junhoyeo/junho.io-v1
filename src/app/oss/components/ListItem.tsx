'use client';

import { motion } from 'framer-motion';

import REPOS from '@/constants/github-repositories.json';

type ListItemProps = typeof REPOS[number];

export const ListItem: React.FC<ListItemProps> = ({ ...repository }) => {
  return (
    <>
      <motion.li
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: -8 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <a title={repository.name} href={repository.html_url} target="_blank">
            {repository.fork && <span className="badge">Fork</span>}
            {repository.archived && <span className="badge">Archived</span>}
            {repository.name}
          </a>
          <span className="stars">
            ⭐️ {repository.stargazers_count.toLocaleString()}
          </span>
        </div>
        <p>{repository.description}</p>
      </motion.li>
      <style jsx>{`
        li {
          display: flex;
          flex-direction: column;
        }

        span.badge {
          padding: 4px 6px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.15);
          font-size: 12px;
          margin-right: 4px;
        }

        span.stars {
          color: #f8ff78;
          background: linear-gradient(
            to top right,
            #f8ff78,
            #ffc34b,
            #8ef2ff,
            #ff6fcd
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        div:first-of-type {
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
        }

        p {
          color: #707176;
          background: linear-gradient(to bottom, #707176, #4b4b4b);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 14px;
        }
      `}</style>
    </>
  );
};
