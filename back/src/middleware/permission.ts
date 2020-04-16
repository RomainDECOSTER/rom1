export default (...allowed) => {
  const isAllowed = (baseRoles, roles) => {
    let hasRole = false;
    baseRoles.forEach((allow) => {
      if (roles.some((role) => role === allow)) hasRole = true;
    });
    return hasRole;
  };

  // return a middleware
  return (request, response, next) => {
    let baseRoles = allowed;
    if (Array.isArray(allowed[0])) {
      baseRoles = allowed[0];
    }
    if (request.user && isAllowed(baseRoles, request.user.roles)) next();
    // role is allowed, so continue on the next middleware
    else {
      response.status(403).json({ message: "Forbidden" }); // user is forbidden
    }
  };
};
