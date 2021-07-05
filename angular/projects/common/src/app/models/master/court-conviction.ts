import { Legislation } from './common-models/legislation';
import { Entity } from './common-models/entity';
import { Penalty } from './common-models/penalty';
import { RecordModel } from '../record-model-abstract';

/**
 * CourtConviction data model.
 *
 * @export
 * @class CourtConviction
 */
export class CourtConviction extends RecordModel {
  _epicProjectId: string;
  _epicMilestoneId: string;
  unlistedMine: string;

  recordSubtype: string;
  dateIssued: Date;
  issuingAgency: string;
  author: string;
  legislation: Legislation;
  offence: string;
  issuedTo: Entity;
  penalties: Penalty[];
  documents: object[];

  CourtConvictionNRCED: object;
  CourtConvictionLNG: object;
  CourtConvictionBCMI: object;

  constructor(obj?: any) {
    super(obj);

    this._schemaName = 'CourtConviction';
    this._epicProjectId = (obj && obj._epicProjectId) || null;
    this._epicMilestoneId = (obj && obj._epicMilestoneId) || null;
    this.unlistedMine = (obj && obj.unlistedMine) || '';

    this.recordSubtype = (obj && obj.recordSubtype) || null;
    this.dateIssued = (obj && obj.dateIssued) || null;
    this.issuingAgency = (obj && obj.issuingAgency) || null;
    this.author = (obj && obj.author) || null;
    this.legislation = (obj && obj.legislation && new Legislation(obj.legislation)) || null;
    this.offence = (obj && obj.offence) || null;
    this.issuedTo = (obj && obj.issuedTo && new Entity(obj.issuedTo)) || null;
    this.penalties =
      (obj && obj.penalties && obj.penalties.length && obj.penalties.map(penalty => new Penalty(penalty))) || null;
    this.documents = (obj && obj.documents) || null;
  }
}
