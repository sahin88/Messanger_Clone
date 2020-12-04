import React, { forwardRef } from "react";
import "./css/Message.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Message = forwardRef((props, ref) => {
  const UserId = props.username === props.message.username;
  const Unix_timestamp = (t) => {
    var dt = new Date(t * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr + ":" + m.substr(-2) + ":" + s.substr(-2);
  };

  return (
    <div ref={ref} className={`msg ${UserId && "message__user"}`}>
      <h6 className={UserId ? "msg__h6__top__right" : "msg__h6__top__left"}>
        {props.message.username ? props.message.username : "Anonym"}
      </h6>
      <Card className={UserId ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="textSecondary" component="h2" variant="h5">
            {/* {!UserId && `${props.message.username || "Anonym User"}:`} */}
            {props.message.message}
          </Typography>
        </CardContent>
      </Card>
      <h6
        className={UserId ? "msg__h6__bottom__right" : "msg__h6__bottom__left"}
      >
        {Unix_timestamp(props.message.timestamp)}
      </h6>
    </div>
  );
});

export default Message;
