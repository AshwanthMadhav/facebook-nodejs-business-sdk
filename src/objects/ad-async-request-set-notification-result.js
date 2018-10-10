/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdAsyncRequestSetNotificationResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequestSetNotificationResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      response: 'response',
      status: 'status',
      id: 'id'
    });
  }

  get (fields, params): AdAsyncRequestSetNotificationResult {
    return this.read(
      fields,
      params
    );
  }
}