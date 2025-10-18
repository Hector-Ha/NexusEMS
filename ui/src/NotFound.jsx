import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <style>
        {`
          .not-found {
            max-width: 400px;
            width: 90%;
            margin: 20px auto;
            padding: 20px;
            background: #ffffff;
            border: 1px solid #d0d0d0;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .not-found h2 {
            color: #1b5e20;
            margin-bottom: 20px;
            font-size: 1.5rem;
            font-weight: 600;
          }
          .not-found p {
            font-size: 0.95rem;
            color: #333;
            margin-bottom: 20px;
            line-height: 1.5;
          }
          .not-found button {
            background: #2e7d32;
            color: #fff;
            padding: 12px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            width: 100%;
            font-size: 0.95rem;
            font-weight: 500;
            transition: background-color 0.3s ease, transform 0.2s ease;
            text-align: center;
            display: block;
            text-decoration: none;
          }
          .not-found button:hover {
            background: #1b5e20;
            transform: translateY(-2px);
          }
          @media (max-width: 600px) {
            .not-found { width: 95%; padding: 15px; }
            .not-found p { font-size: 0.9rem; }
            .not-found button { font-size: 0.9rem; padding: 10px; }
            .not-found h2 { font-size: 1.2rem; }
          }
        `}
      </style>
      <div className="not-found">
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button>Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;