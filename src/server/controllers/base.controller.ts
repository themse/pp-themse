import { NextApiRequest, NextApiResponse } from 'next';

export abstract class BaseController {
  /**
   * This is the implementation that we will leave to the
   * subclasses to figure out.
   */
  protected abstract executeImpl(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void | any>;

  /**
   * This is what we will call on the route handler.
   * We also make sure to catch any uncaught errors in the
   * implementation.
   */
  public async execute(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    try {
      await this.executeImpl(req, res);
    } catch (error) {
      console.log('[BaseController]: Uncaught controller error');
      console.log(error);
      this.fail(res, 'An unexpected error occurred');
    }
  }

  public static jsonResponse(
    res: NextApiResponse,
    code: number,
    message: string
  ) {
    return res.status(code).json({ message });
  }

  public ok<T>(res: NextApiResponse, dto?: T) {
    if (!!dto) {
      res.setHeader('Content-Type', 'application/json');

      return res.status(200).json(dto);
    }
    return res.status(200).end();
  }

  public created(res: NextApiResponse) {
    return res.status(201).end();
  }

  public clientError(res: NextApiResponse, message?: string) {
    return BaseController.jsonResponse(res, 400, message || 'Unauthorized');
  }

  public unauthorized(res: NextApiResponse, message?: string) {
    return BaseController.jsonResponse(res, 401, message || 'Unauthorized');
  }

  public paymentRequired(res: NextApiResponse, message?: string) {
    return BaseController.jsonResponse(res, 402, message || 'Payment required');
  }

  public forbidden(res: NextApiResponse, message?: string) {
    return BaseController.jsonResponse(res, 403, message || 'Forbidden');
  }

  public notFound(res: NextApiResponse, message?: string) {
    return BaseController.jsonResponse(res, 404, message || 'Not found');
  }

  public conflict(res: NextApiResponse, message?: string) {
    return BaseController.jsonResponse(res, 409, message || 'Conflict');
  }

  public tooMany(res: NextApiResponse, message?: string) {
    return BaseController.jsonResponse(
      res,
      429,
      message || 'Too many requests'
    );
  }

  public todo(res: NextApiResponse) {
    return BaseController.jsonResponse(res, 400, 'TODO');
  }

  public fail(res: NextApiResponse, error: Error | string) {
    console.log(error);
    return res.status(500).json({
      message: error.toString(),
    });
  }
}
