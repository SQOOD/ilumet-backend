import { objectType, extendType } from 'nexus'	

export const Featured = objectType({
  name: 'Featured',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.title()
    t.model.content()
    t.model.profile()
    t.model.position()
    t.model.company()
    t.model.picture()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const featuredQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.featured()
    t.crud.featureds({ filtering: true, ordering: true })
  },
})

export const featuredMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFeatured()
    t.crud.updateOneFeatured()
    t.crud.upsertOneFeatured()
    t.crud.deleteOneFeatured()

    t.crud.updateManyFeatured()
    t.crud.deleteManyFeatured()
  },
})