export function successResponse(message: string, data: any = []) {
  return {
    status: 200,
    message,
    data,
  }
}

export function errorResponse(message: string, data: any = []) {
  return {
    status: 400,
    message,
    data,
  }
}

export function notFoundResponse(message: string, data: any = []) {
  return {
    status: 404,
    message,
    data,
  }
}
