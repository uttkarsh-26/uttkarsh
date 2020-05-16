/** @jsx jsx */
import React, { Fragment } from "react";
import { jsx } from "theme-ui";

type SkillCardProps = {
  title: string;
};

const SkillCard = ({ title }: SkillCardProps) => (
  <Fragment>
    <div
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 4,
        py: [4, 5],
        color: `white`,
        background: `linear-gradient(to bottom right, #b92b27 0%, #1565C0 100%)`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
        fontStyle: `oblique`,
        textAlign: `center`,
      }}
    >
      {title}
    </div>
  </Fragment>
);

export default SkillCard;
