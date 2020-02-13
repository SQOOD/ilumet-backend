import { objectType, extendType } from 'nexus'	

export const Company = objectType({
  name: 'Company',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.name()
    t.model.company_address()
    t.model.industry()
    t.model.about()
    t.model.phone()
    t.model.email()
    t.model.url1()
    t.model.url2()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const companyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company()
    t.crud.companies({ filtering: true, ordering: true })
  },
})

export const companyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCompany()
    t.crud.updateOneCompany()
    t.crud.upsertOneCompany()
    t.crud.deleteOneCompany()

    t.crud.updateManyCompany()
    t.crud.deleteManyCompany()
  },
})