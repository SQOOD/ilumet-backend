import { objectType, extendType } from 'nexus'	

export const Picture = objectType({
  name: 'Picture',
  definition(t) {
    t.model.id()
    t.model.post()
    t.model.picture()
  },
})

export const pictureQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.picture()
    t.crud.pictures({ filtering: true, ordering: true })
  },
})

export const pictureMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePicture()
    t.crud.updateOnePicture()
    t.crud.upsertOnePicture()
    t.crud.deleteOnePicture()

    t.crud.updateManyPicture()
    t.crud.deleteManyPicture()
  },
})