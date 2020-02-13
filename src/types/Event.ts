import { objectType, extendType } from 'nexus'	

export const Event = objectType({
  name: 'Event',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.title()
    t.model.speaker()
    t.model.content()
    t.model.address()
    t.model.time()
    t.model.fee()
    t.model.fee_content()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const eventQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.event()
    t.crud.events({ filtering: true, ordering: true })
  },
})

export const eventMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneEvent()
    t.crud.updateOneEvent()
    t.crud.upsertOneEvent()
    t.crud.deleteOneEvent()

    t.crud.updateManyEvent()
    t.crud.deleteManyEvent()
  },
})