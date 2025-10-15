import React from 'react';
import { Box, BasePropertyProps } from 'admin-bro';

const List: React.FC<BasePropertyProps> = (props) => {
  const { record, property } = props;

  const srcImg = record.params.image;
  const srcCertificate = record.params.certificate;

  return (
    <Box>
      {property.name === 'image' && (srcImg ? <img src={srcImg} width="100px" /> : 'no image')}
      {property.name === 'certificate' && (srcCertificate ? <img src={srcCertificate} width={"100px"}/> : 'no certificate')}
    </Box>
  );
};

export default List;
