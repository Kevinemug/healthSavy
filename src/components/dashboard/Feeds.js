import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "You have 10 Appointments  waiting for your Feedback ",
    icon: "bi bi-bell",
    color: "primary",
    date: "6 minute ago",
  },
  {
    title: "20 people viewed your profile",
    icon: "bi bi-person",
    color: "info",
    date: "2 minute ago",
  },
  {
    title: "You have an appointment in 30 minutes",
    icon: "bi bi-hdd",
    color: "danger",
    date: "Just Now",
  },
  {
    title: "Patients are giving you Good Reviews",
    icon: "bi bi-bag-check",
    color: "success",
    date: "1 minute ago",
  },
  {
    title: "Weekend Appointments pending",
    icon: "bi bi-bell",
    color: "dark",
    date: "4 minute ago",
  },
  {
    title: "Meeting ",
    icon: "bi bi-hdd",
    color: "warning",
    date: "6 minute ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Recent activities
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
