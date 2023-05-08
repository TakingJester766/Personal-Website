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
            Authorization: `token ${appConfig.github}`
          },
        };
      
        try {
          const response = await axios.get(url, config);
          setActivity(response.data);
        } catch (error) {
          console.error("Error fetching GitHub activity:", error);
        }
      };

    // Add this useEffect hook
    useEffect(() => {
      fetchGitHubActivity();
    }, []);

    return (
        <div>
          <h1>GitHub Activity Feed</h1>
          <ul>
            {activity.map((event, index) => (
              <li key={index}>
                <strong>{event.type}:</strong> {event.repo.name}
              </li>
            ))}
          </ul>
        </div>
      );

};

export default GitHubActivityFeed;
