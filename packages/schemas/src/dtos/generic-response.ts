export type ErrorResponse<T> = {
  status: 'error';
  error: T;
};

export type SuccessResponse<T> = {
  status: 'success';
  data: T;
};

export type GenericResponse<T> = SuccessResponse<T> | ErrorResponse<T>;
