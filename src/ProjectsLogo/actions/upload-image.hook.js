const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, image, certificate } = context;

  if (record.isValid()) {
    if (image) {
      const imagePath = path.join('uploads', record.id().toString(), image.name);
      await fs.promises.mkdir(path.dirname(imagePath), { recursive: true });
      await fs.promises.rename(image.path, imagePath);
      await record.update({ image: `/${imagePath}` });
    }

    if (certificate) {
      const certificatePath = path.join('uploads', record.id().toString(), certificate.name);
      await fs.promises.mkdir(path.dirname(certificatePath), { recursive: true });
      await fs.promises.rename(certificate.path, certificatePath);
      await record.update({ certificate: `/${certificatePath}` });
    }
  }

  return response;
};

/** @type {AdminBro.Before} */
const before = async (request, context) => {
  if (request.method === 'post') {
    const { image, certificate, ...otherParams } = request.payload;

    // Store files in context for later processing
    if (image) {
      context.image = image;
    }

    if (certificate) {
      context.certificate = certificate;
    }

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };
