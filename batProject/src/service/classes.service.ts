import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, LessThan, MoreThanOrEqual } from 'typeorm';
import { ClassesEntity } from 'src/entity/classes.entity';
import { commonFun } from 'src/clsfunc/commonfunc';
import { ClassesDTO } from 'src/dto/classes.dto';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(ClassesEntity)
    private classesRepository: Repository<ClassesEntity>,
  ) {}

  async gubunKind(body: ClassesDTO) {
    switch (body.kind) {
      case 'insert':
        return await this.Insert_Classes(body);
      case 'select':
        return;
      case 'update':
        return;
      case null:
        return { msg: null };
    }
  }

  async Insert_Classes(body: ClassesDTO) {
    try {
      const values = this.getInserValues(body);
      
      const result = await this.classesRepository
        .createQueryBuilder()
        .insert()
        .into(ClassesEntity)
        .values([values])
        .execute();

      console.log('Insert_Classes');
      return result.identifiers.length > 0;
    } catch (E) {
      console.log(E);
      return { msg: E };
    }
  }

  getInserValues(body: ClassesDTO) {    
    let background_img;
    if (body.background_img) {
      background_img = commonFun.getImageBuffer(body.background_img);
    } else {
      background_img = null
    }

    let profile_img;
    if (body.profile_img) {
      profile_img = commonFun.getImageBuffer(body.profile_img);
    } else {
      profile_img = null
    }

    const values = {
      id: body.id,
      background_img: background_img,
      profile_img: profile_img,
      writetime: body.writetime,
      title: body.title,
      content: body.content,
    };

    return values
  }

  async subQueryArr(
    eq: string,
    writetime: string,
    endDate: string,
  ): Promise<string> {
    const subSelect = 'COUNT(ecgpacket) count,writetime';
    try {
      //const result = await this.ecg_csv_ecgdata_arrRepository.createQueryBuilder()
      //.subQuery()
      //.select(subSelect)
      //.from(ecg_csv_ecgdata_arrEntity,'')
      //.where(`eq = '${eq}'`)
      //.andWhere(`writetime >= '${writetime}'`)
      //.andWhere(`writetime < '${endDate}'`)
      //.groupBy('writetime')
      //.having('COUNT(ecgpacket)')
      //.getQuery()
      //return result
      return '';
    } catch (E) {
      console.log(E);
    }
  }
}
