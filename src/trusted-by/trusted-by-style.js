import styled from "styled-components";

export const TrustedByStyle = styled.div`
  .trusted-container {
    padding: 60px 20px;
    text-align: center;
    background-color: #f8f9fa;
  }

  .trusted-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 40px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .stat-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-icon {
    font-size: 3rem;
    color: #667eea;
    margin-bottom: 15px;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
  }

  .stat-label {
    font-size: 1.1rem;
    color: #666;
  }
`;