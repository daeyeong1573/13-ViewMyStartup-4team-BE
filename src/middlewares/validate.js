import { z } from "zod";

export const validate = (schema, source = "body") => {
  return (req, res, next) => {
    const result = schema.safeParse(req[source]);

    if (!result.success && result.error) {
      // result.error 존재 확인 추가
      return res.status(400).json({
        success: false,
        errors: result.error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }

    //기존 validatedData가 있으면 유지, 새로운 데이터는 추가
    req.validatedData = { ...req.validatedData, ...result.data };
    next();
  };
};
