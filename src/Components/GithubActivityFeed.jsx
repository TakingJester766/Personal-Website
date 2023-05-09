import React, { useState, useEffect } from "react";
import axios from "axios";
import appConfig from "../config";

const GitHubActivityFeed = () => {
  const [activity, setActivity] = useState([]);

  const fetchGitHubActivity = async () => {
    const url = "https://api.github.com/users/TakingJester766/events/public";
    const config = {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${appConfig.github}`,
      },
    };

    try {
      const response = await axios.get(url, config);
      setActivity(response.data.slice(0, 5)); // Limit to the first 5 events
    } catch (error) {
      console.error("Error fetching GitHub activity:", error);
    }
  };

  useEffect(() => {
    fetchGitHubActivity();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="activity-feed">
      <h1>GitHub Activity Feed</h1>
      <ul>
        {activity.map((event, index) => (
          <li key={index}>
            <strong>{event.type}:</strong> {event.repo.name}
            <div className="date">{formatDate(event.created_at)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubActivityFeed;
